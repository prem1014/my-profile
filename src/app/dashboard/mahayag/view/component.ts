import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../_core/api.service';
import { ToasterService } from '../../../_core/toaster-service';
import * as _ from 'lodash';

@Component({
    selector: 'app-view',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class PaymentDetailsComponent implements OnInit {
    private chandaDetails: any = [];
    private totalAmount = 0;
    private selectedRow;
    private isRowSelected;
    private user;
    private message;
    constructor (private api: ApiService, private toaster: ToasterService) {}

    ngOnInit () {
        this.user = JSON.parse(sessionStorage.getItem('userRole'));
        if (this.user === null) {
            this.user = {
                role: null
            };
        } else {
            if (this.user.role !== 'Maahayag#2356@') {
                this.message = 'आपको चंदा विवरण देखने की अनुमति नहीं है |';
            } else {
                this.getChanda();
            }
        }
    }

    private deleteChanda (id) {
        this.api.deleteChanda(id)
        .subscribe( data => {
            console.log('Data deleted');
            this.toaster.success(
                {
                    success: true,
                    message: 'आपके द्वारा चूना गया चंदा का विवरण सफलता पूर्वक हटा दिया गया |'
                }
            );
            this.isRowSelected = false;
            this.getChanda();
        });
    }
    private onRowSelection (selectedRow, index) {
        this.isRowSelected = true;
        this.selectedRow = selectedRow;
        this.chandaDetails = _.map(this.chandaDetails, item => {
            if (item._id === selectedRow._id) {
                item.isRowSelected = true;
            } else {
                item.isRowSelected = false;
            }
            return item;
        });
    }

    private getChanda () {
        this.api.getChanda()
        .subscribe( (data: any) => {
            this.chandaDetails = data.chandaDetails;
            this.totalAmount = _.sumBy(this.chandaDetails, (chandaDetail) => {
                return chandaDetail.amount;
            });
        });
    }
}
