import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../_core/api.service';
import { ToasterService } from '../../../_core/toaster-service';

@Component({
    selector: 'app-add',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class AddPaymentComponent implements OnInit {
    private paymentDetails: any = {};
    constructor (private api: ApiService, private toaster: ToasterService) {}
    ngOnInit () {}

    private save(): void {
        console.log(this.paymentDetails);
        this.api.saveChanda(this.paymentDetails)
        .subscribe( (data) => {
            console.log('data saved');
            this.toaster.success(
                {
                    success: true,
                    message: 'चंदा का विवरण सफलतापूर्वक सेभ हो गया |'
                }
            );
        });
    }
}
