import { Component, OnInit } from '@angular/core';
import { APIService } from '../_core/api-service'
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
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
export class ContactMeComponent implements OnInit {
  contactDetails: any = {};
  isLoading: string;
  public toastr;
  public user: any;
  public toasterconfig;
  constructor(private api: APIService) {
    this.api = api;
    this.toasterconfig = this.api.initToasterConfig();
    this.toastr = api.getToaster();
  }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('userRole'));
    this.contactDetails.name = this.user ? this.user.name : undefined;
    this.contactDetails.email = this.user ? this.user._id : undefined;
  }
  saveMessage(): void {
    this.isLoading = 'true';
    this.contactDetails.messageDate = new Date();
    this.api.saveMessage({messageDetails: this.contactDetails})
      .subscribe(data => {
        this.isLoading = 'false'
        this.toastr.success('Your message has saved. Thank you for your interest. I will get back to you soon.')
      });
  }
}