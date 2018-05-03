import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-prototype',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class PrototypeComponent implements OnInit {
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
            title: 'Prototypes'
        }
        this.feedback = {
            userId: userId,
            tutorialName: 'Prototypes'
        }
        this.commentDetails = {
            email: userId,
            tutorialName: 'Prototypes'
        }
        this.isCommentSelected = false;
        
    }
    ngOnInit(){}

    enterComment(event) {
        this.isCommentSelected = event;
        window.scrollBy(0, this.ele.nativeElement.offsetTop);
    }
}