import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { APIService } from '../../_core/api-service';
import { ToasterConfig } from 'angular2-toaster';

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
    public loading: string;
    public saving: string;
    //@Output() commentAdded: EventEmitter<object> = new EventEmitter<object>(); 
    
    constructor(private API: APIService){
        this.toasterconfig = 
        new ToasterConfig({
            showCloseButton: true, 
            tapToDismiss: false, 
            timeout: 0,
            positionClass: 'toast-top-right'
        });
        this.toastr = this.API.getToaster();
    }

    ngOnInit(){
        this.getComments(this.commentDetails.tutorialName);
    }
    
    saveComment() {
        this.saving = 'true';
        this.API.saveComment(this.commentDetails)
        .subscribe(response => {
            //console.log(response);
            this.saving = 'false';
            //this.toastr.success('Comment added successfully !!');
            this.getComments(this.commentDetails.tutorialName);
        })
    }

    getComments(tutorialName) {
        this.loading = 'true';
        this.API.getComments(tutorialName)
        .subscribe(response => {
            this.commentList = response.data;
            this.loading = 'false';
        })
    }
}