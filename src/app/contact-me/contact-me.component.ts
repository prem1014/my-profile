import { Component, OnInit } from '@angular/core';
import { APIService } from '../_core/api-service'

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  private contactDetails: any = {};
  private isLoading: string;
  constructor(private api: APIService) {
    this.api = api;
  }

  ngOnInit() {
  }
  saveMessage(): void {
    this.isLoading = 'true';
    this.contactDetails.messageDate = new Date();
    this.api.saveMessage({messageDetails: this.contactDetails})
      .subscribe(data => this.isLoading = 'false');
  }
}