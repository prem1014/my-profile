import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { APIService } from '../_core/api-service';

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
        this.toasterconfig = this.api.initToasterConfig();
        this.toastr = this.api.getToaster();
    }
    ngOnInit() {
    }
    signUp(){
        this.loading = 'true'
        this.api.saveSignUpDetails(this.user)
        .subscribe(data => {
            this.loading = 'false'
            this.toastr.success('Your data has saved');
        });
    }
}