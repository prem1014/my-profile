import { Component, OnInit } from '@angular/core';
import { APIService } from '../_core/api-service'

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  contactDetails: any = {};
  isLoading: string;
  public toastr;
  public toasterconfig;
  constructor(private api: APIService) {
    this.api = api;
    this.toasterconfig = this.api.initToasterConfig();
    this.toastr = api.getToaster();
  }

  ngOnInit() {
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