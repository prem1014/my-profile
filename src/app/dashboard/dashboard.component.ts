import { Component, OnInit } from '@angular/core';
import { APIService } from '../_core/api-service'

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    contactDetails: any = [];
    isLoading: string = 'true';
    constructor(private api: APIService){
        this.api = api;
        this.api.getMessageDetails()
        .subscribe(data => {
            this.contactDetails = data.messageDetails
            this.isLoading = 'false';
        });
    }
    ngOnInit() {

    }
};