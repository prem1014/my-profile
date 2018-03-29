import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { APIService } from '../_core/api-service';
import { ToasterConfig } from 'angular2-toaster';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
    selector: 'app-signup',
    templateUrl: './sign-up.html',
    animations: [
        trigger('slideInOut', [
          transition(':enter', [
            style({transform: 'translateY(-100%)'}),
            animate('800ms ease-in', style({transform: 'translateY(0%)'}))
          ]),
          transition(':leave', [
            animate('800ms ease-in', style({transform: 'translateY(-100%)'}))
          ])
        ])
      ]
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