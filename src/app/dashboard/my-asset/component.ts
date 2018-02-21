import { Component,OnInit } from '@angular/core';
import { APIService } from '../../_core/api-service';
import { ToasterConfig } from 'angular2-toaster';

import * as _ from 'lodash'

@Component({
    selector: 'app-my-asset',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class MyAssetComponent implements OnInit {
    public asset: any = {}
    public expense: any = {}
    public totalAsset: Number;
    public totalExpense: Number;
    public toasterconfig;
    public toastr;
    public userDetails;
    public isSavingAsset;
    public isSavingExpense;
    public isLoadingAsset;
    public isLoadingExpense;
    constructor(private api: APIService){
        //this.toasterconfig = this.api.initToasterConfig();
        this.toasterconfig = 
        new ToasterConfig({
            showCloseButton: true, 
            tapToDismiss: false, 
            timeout: 0,
            positionClass: 'toast-bottom-right'
        });
        this.toastr = this.api.getToaster();
    }
    ngOnInit(){
        this.userDetails = JSON.parse(sessionStorage.getItem('userRole'));
        this.getAsset();
        this.getExpense();
    }

    saveAsset(): void {
        this.isSavingAsset = true;
        this.asset.userId = this.userDetails._id;
        this.api.saveAssetDetails(this.asset)
        .subscribe( data => {
            this.toastr.success('Data Saved')
            this.isSavingAsset = false;
            this.getAsset();
            this.getExpense();
        });
    }

    saveExpense(): void {
        this.isSavingExpense = true;
        this.expense.userId = this.userDetails._id;
        this.api.saveExpenseDetails(this.expense)
        .subscribe( data => {
            this.toastr.success('Data Saved');
            this.isSavingExpense = false;
            this.getAsset();
            this.getExpense();
        });
    }

    getAsset(): void {
        this.isLoadingAsset = true;
        this.api.getAsset(this.userDetails._id)
        .subscribe(data => {
            console.log(data);
            this.totalAsset = this.getTotal(data.data)
            this.isLoadingAsset = false;
            console.log(this.getAmountByMonth(data.data, '2018-02-07'))
        })
    }

    getExpense(): void {
        this.isLoadingExpense = true;
        this.api.getExpense(this.userDetails._id)
        .subscribe(data => {
            console.log(this.getTotal(data.data));
            this.totalExpense = this.getTotal(data.data);
            this.isLoadingExpense = false;
        })
    }

    getTotal(data) {
        return _.sumBy(data, function (d) {
            d.amount = Number(d.amount);
            return d.amount;
        });
    }
    getAmountByMonth(data, date){
        date = new Date(date);
        let month = date.getMonth();
        let filterData = _.map(data, (item) => {
            let dataMonth = new Date(item.date).getMonth();
            if(month === dataMonth){
                return item;
            } 
        });
        return _.sumBy(filterData, (d) => {
            return Number(d.amount);
        });
    }
}