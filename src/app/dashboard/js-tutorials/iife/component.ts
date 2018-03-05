import { Component, OnInit } from '@angular/core';

import { APIService } from '../../../_core/api-service';

@Component({
    selector: 'app-iife',
    templateUrl: './component.html',
    styleUrls: ['./iife.scss']
})

export default class IIFEComponent implements OnInit {
    public feedback;
    public user;
    public header;

    constructor(private API: APIService) {
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
    }

    ngOnInit() {

    }
}