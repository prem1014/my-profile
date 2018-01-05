import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './sign-up.html'
})

export class SignUpComponent implements OnInit {
    private user: any = {};
    constructor(){

    }
    ngOnInit() {
    }
}