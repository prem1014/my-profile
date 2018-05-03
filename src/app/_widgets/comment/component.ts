import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../_core/api.service';
import { ToasterService } from '../../_core/toaster-service';

@Component({
    selector: 'app-comment',
    templateUrl: './component.html',
    styleUrls: ['./comment.scss']
})

export class CommentComponent implements OnInit {
    @Input() mode: string;
    @Input() commentDetails: any = {}
    public toasterconfig;
    public toastr;
    public commentList;
    public saving: string;
    //@Output() commentAdded: EventEmitter<object> = new EventEmitter<object>(); 

    constructor(private API: ApiService, private toaster: ToasterService) {

    }

    ngOnInit() {
        this.getComments(this.commentDetails.tutorialName);
    }

    saveComment() {
        this.saving = 'true';
        this.commentDetails.date = new Date();
        this.API.saveComment(this.commentDetails)
            .subscribe(
                response => {
                    this.saving = 'false';
                    this.toaster.success(
                        {
                            success: true,
                            message: 'Comment added successfully !!'
                        }
                    );
                    this.getComments(this.commentDetails.tutorialName);
                },
                error => {
                    this.toaster.success(
                        {
                            error: true,
                            message: error.message
                        }
                    );
                }
            )
    }

    getComments(tutorialName) {
        this.commentDetails.loading = 'true';
        this.API.getComments(tutorialName)
            .subscribe((response: any) => {
                this.commentDetails.loading = 'false';
                //this.commentList = response.data;
                this.commentDetails.commentList = response.data;
                this.commentDetails.totalComment = response.data.length;
            })
    }
}