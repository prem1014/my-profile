import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-hoisting',
    templateUrl: './component.html',
})

export class HoistingComponent implements OnInit {
    public header;
    public user;
    public feedback;
    public commentDetails;
    public answer;
    public isCommentSelected: boolean;
    constructor(private ele: ElementRef){
        this.user = JSON.parse(sessionStorage.getItem('userRole'));
        let userId = this.user ? this.user._id : 'Guest';
        this.header = {
            titleSrc: '../../../assets/js.jpg',
            title: 'Hoisting'
        }
        this.feedback = {
            userId: userId,
            tutorialName: 'Hoisting'
        }
        this.commentDetails = {
            email: userId,
            tutorialName: 'Hoisting'
        }
        this.isCommentSelected = false;
    }

    ngOnInit(){
        
    }

    enterComment(event) {
        this.isCommentSelected = event;
        window.scrollBy(0, this.ele.nativeElement.offsetTop);
    }
}