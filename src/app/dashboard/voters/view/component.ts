import { Component, OnInit } from '@angular/core';


import { ApiService } from '../../../_core/api.service';
import { ToasterService } from '../../../_core/toaster-service';
import * as _ from 'lodash';

@Component({
    selector: 'app-view-voters',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class ViewVotersComponent implements OnInit {
    private votersDetails: any = [];
    private totalVote = 0;
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
            if (this.user.role !== 'Admin') {
                this.message = 'Sorry !!! You do not have proper access rights to view this page';
            } else {
                this.getVoterDetails();
            }
        }
    }

    private deleteChanda (id) {
        this.api.deleteVoterDetails(id)
        .subscribe( data => {
            console.log('voter deleted');
            this.toaster.success(
                {
                    success: true,
                    message: 'Voter details deleted'
                }
            );
            this.isRowSelected = false;
           this.getVoterDetails();
        });
    }
    private onRowSelection (selectedRow, index) {
        this.isRowSelected = true;
        this.selectedRow = selectedRow;
        this.votersDetails = _.map(this.votersDetails, item => {
            if (item._id === selectedRow._id) {
                item.isRowSelected = true;
            } else {
                item.isRowSelected = false;
            }
            return item;
        });
    }

    private getVoterDetails () {
        this.api.getVoterDetails()
        .subscribe( (data: any) => {
            this.votersDetails = data.voteDetails;
            /*this.totalVote = _.sumBy(this.totalVote, (chandaDetail) => {
                return chandaDetail.amount;
            })*/
            this.totalVote = this.votersDetails.length;
        });
    }
}
