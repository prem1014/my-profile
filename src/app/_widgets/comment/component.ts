import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../_core/api.service';
//import { ToasterConfig } from 'angular2-toaster';

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
    
    constructor(private API: ApiService){
        
    }

    ngOnInit(){
        this.getComments(this.commentDetails.tutorialName);
    }
    
    saveComment() {
        this.saving = 'true';
        this.commentDetails.date = new Date();
        this.API.saveComment(this.commentDetails)
        .subscribe(response => {
            //console.log(response);
            this.saving = 'false';
            //this.toastr.success('Comment added successfully !!');
            this.getComments(this.commentDetails.tutorialName);
        })
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