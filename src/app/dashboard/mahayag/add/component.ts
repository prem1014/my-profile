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
    private user;
    private message;
    constructor(private api: ApiService, private toaster: ToasterService) { }
    ngOnInit() {
        this.user = JSON.parse(sessionStorage.getItem('userRole'));
        if (this.user === null) {
            this.user = {
                role: null
            };
        } else {
            if (this.user.role !== 'Maahayag#2356@') {
                this.message = 'आपको चंदा विवरण डालने की अनुमति नहीं है |';
            }
        }
    }

    private save(): void {
        console.log(this.paymentDetails);
        this.paymentDetails.id = 'TR' + Math.floor(Math.random() * 1000 + 1);
        this.api.saveChanda(this.paymentDetails)
            .subscribe((data) => {
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
