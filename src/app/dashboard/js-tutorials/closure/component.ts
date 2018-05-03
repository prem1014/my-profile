import { Component, OnInit, ElementRef } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
    selector: 'app-closure',
    templateUrl: './component.html',
    styleUrls: ['./component.scss'],
})

export class ClosureComponent implements OnInit {
    public header;
    public user;
    public feedback;
    public commentDetails;
    public answer;
    public isCommentSelected: boolean;
    constructor(private ele: ElementRef){
        this.user = JSON.parse(sessionStorage.getItem('userRole'));
        let userId = this.user ? this.user._id : 'Guest';
        this.feedback = {
            userId: userId,
            tutorialName: 'Closure'
        }
        this.header = {
            titleSrc: '../../../assets/js.jpg',
            title: 'Closure'
        }
        this.commentDetails = {
            email: userId,
            tutorialName: 'Closure'
        }
        this.isCommentSelected = false;
    }
    ngOnInit() {

    }

    enterComment(event) {
        this.isCommentSelected = event;
        window.scrollBy(0, this.ele.nativeElement.offsetTop);
    }
}