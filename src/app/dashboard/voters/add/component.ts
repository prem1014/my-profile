import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../_core/api.service';
import { ToasterService } from '../../../_core/toaster-service';

@Component({
    selector: 'app-add-voters',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class AddVotersComponent implements OnInit {
    private voter: any = {};
    private user;
    private message;
    private wardDetails;
    constructor(private api: ApiService, private toaster: ToasterService) {
        this.wardDetails = [
            {
                id: 1,
                name: 'One'
            },
            {
                id: 2,
                name: 'Two'
            },
            {
                id: 3,
                name: 'Three'
            },
            {
                id: 4,
                name: 'Four'
            },
            {
                id: 5,
                name: 'Five'
            },
            {
                id: 6,
                name: 'Six'
            },
            {
                id: 7,
                name: 'Seven'
            },
            {
                id: 8,
                name: 'Eight'
            },
            {
                id: 9,
                name: 'Nine'
            },
            {
                id: 10,
                name: 'Ten'
            },
            {
                id: 11,
                name: 'Eleven'
            },
            {
                id: 12,
                name: 'Tweleve'
            },
            {
                id: 13,
                name: 'Thirteen'
            }
        ];
     }
    ngOnInit() {
        this.user = JSON.parse(sessionStorage.getItem('userRole'));
        if (this.user === null) {
            this.user = {
                role: null
            };
        } else {
            if (this.user.role !== 'Admin') {
                this.message = 'Sorry !! you do not have access right to view this page';
            }
        }
    }

    private save(): void {
        console.log(this.voter);
        this.api.saveVoters(this.voter)
            .subscribe((data) => {
                console.log('data saved');
                this.toaster.success(
                    {
                        success: true,
                        message: 'Data Saved !!!'
                    }
                );
            });
    }
}
