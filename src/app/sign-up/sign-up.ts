import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ToasterService, ToasterConfig} from 'angular2-toaster';
import { APIService } from '../_core/api-service';

@Component({
    selector: 'app-signup',
    templateUrl: './sign-up.html'
})

export class SignUpComponent implements OnInit {
    private user: any = {};
    private loading;
    constructor(private api: APIService, private toasterService: ToasterService){
        this.user.role = 'Normal';
    }
    ngOnInit() {
    }
    public toasterconfig : ToasterConfig = 
    new ToasterConfig({
        showCloseButton: true, 
        tapToDismiss: false, 
        timeout: 0,
        positionClass: 'toast-bottom-right'
    });
    signUp(){
        this.loading = 'true'
        this.toasterService.pop('success', 'Args Title', 'Args Body');
        this.api.saveSignUpDetails(this.user)
        .subscribe(data => {
            this.loading = 'false'
            this.toasterService.pop('success', '', 'Your data has saved');
        });
    }
}