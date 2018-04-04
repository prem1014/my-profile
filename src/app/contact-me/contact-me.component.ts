import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_core/api.service'
import { ToasterService } from '../_core/toaster-service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent implements OnInit {
  contactDetails: any = {};
  isLoading: string;
  public toastr;
  public collapsed;
  public user: any;
  public toasterconfig;
  constructor(private api: ApiService, private toaster: ToasterService) {

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
        this.toastr.success(
          {
            success: true,
            message: 'Your message has saved. Thank you for your interest. I will get back to you soon.'
          }
        )
      },
      error => {
        this.isLoading = 'false';
        this.toaster.error(
          {
            error: true,
            message: error.message
          }
        )
      }
    );
  }
}