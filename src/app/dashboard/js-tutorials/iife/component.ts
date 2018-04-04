import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../_core/api.service';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
    selector: 'app-iife',
    templateUrl: './component.html',
    styleUrls: ['./iife.scss'],
})

export class IIFEComponent implements OnInit {
    public feedback;
    public user;
    public header;
    public commentDetails;
    public isCommentSelected: boolean;

    constructor(private API: ApiService) {
        this.user = JSON.parse(sessionStorage.getItem('userRole'));
        let userId = this.user ? this.user._id : 'Guest';
        this.feedback = {
            userId: userId,
            tutorialName: 'IIFE'
        }
        this.header = {
            titleSrc: '../../../assets/js.jpg',
            title: 'IIFE'
        }
        this.commentDetails = {
            email: userId,
            tutorialName: 'IIFE'
        }
    }

    ngOnInit() {

    }

    enterComment(event) {
        this.isCommentSelected = event;
    }
}