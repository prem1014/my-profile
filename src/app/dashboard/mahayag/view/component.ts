import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../_core/api.service';
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
    constructor (private api: ApiService) {}

    ngOnInit () {
        this.api.getChanda()
        .subscribe( (data: any) => {
            this.chandaDetails = data.chandaDetails;
            this.totalAmount = _.sumBy(this.chandaDetails, (chandaDetail) => {
                return chandaDetail.amount;
            });
        });
    }

    private deleteChanda (id) {
        this.api.deleteChanda(id)
        .subscribe( data => {
            console.log('Data deleted');
        });
    }
    private onRowSelection (selectedRow, index) {
        this.isRowSelected = true;
        this.selectedRow = selectedRow;
        this.chandaDetails = _.map(this.chandaDetails, item => {
            if (item.name === selectedRow.name) {
                item.isRowSelected = true;
            } else {
                item.isRowSelected = false;
            }
            return item;
        });
    }
}
