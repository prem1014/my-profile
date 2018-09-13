import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../_core/api.service';


@Component({
    selector: 'app-view',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class PaymentDetailsComponent implements OnInit {
    private chandaDetails: any = [];
    constructor (private api: ApiService) {}

    ngOnInit () {
        this.api.getChanda()
        .subscribe( (data) => {
            this.chandaDetails = data;
        });
    }
}
