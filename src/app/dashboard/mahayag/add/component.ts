import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../_core/api.service';

@Component({
    selector: 'app-add',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class AddPaymentComponent implements OnInit {
    private paymentDetails: any = {};
    constructor (private api: ApiService) {}
    ngOnInit () {}

    private save(): void {
        console.log(this.paymentDetails);
        this.api.saveChanda(this.paymentDetails)
        .subscribe( (data) => {
            console.log('data saved');
        });
    }
}
