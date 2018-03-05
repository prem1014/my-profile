import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { APIService } from '../_core/api-service';
import { ToasterConfig } from 'angular2-toaster';

@Component({
    selector: 'app-signup',
    templateUrl: './sign-up.html'
})

export class SignUpComponent implements OnInit {
    public user: any = {};
    public loading;
    public toasterconfig;
    public toastr;
    constructor(private api: APIService){
        this.user.role = 'Normal';
        this.toasterconfig = 
        new ToasterConfig({
            showCloseButton: true, 
            tapToDismiss: false, 
            timeout: 0,
            positionClass: 'toast-bottom-right'
        });
        this.toastr = this.api.getToaster();
    }
    ngOnInit() {
    }
    signUp(){
        this.loading = 'true'
        this.api.saveSignUpDetails(this.user)
        .subscribe(data => {
            this.loading = 'false'
            this.toastr.success('Thank you for your registrtion !!!!');
        });
    }
}