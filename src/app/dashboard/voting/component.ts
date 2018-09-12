import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../_core/api.service';
import { ToasterService } from '../../_core/toaster-service';
import * as moment from 'moment';
@Component({
    selector: 'app-voting',
    templateUrl: './component.html'
})

export class VotingComponent implements OnInit {
    public voteDetails: any = {};
    public wardDetails;
    public loading;
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

    }

    public saveVote(): void {
        this.loading = 'true';
        this.voteDetails.voteDate = moment(new Date()).format('MM/DD/YYYY');
        this.api.saveVote(this.voteDetails)
            .subscribe((data: any) => {
                this.loading = 'false';
                if (data.message.code === 11000) {
                    this.toaster.success(
                        {
                            error: true,
                            message: 'क्षमा चाहते है, अपने एक बार वोट दे दिया है | कृपया दूसरे मोबाइल नंबर  से  कोसिस  करें |'
                        }
                    );
                } else {
                    this.toaster.success(
                        {
                            success: true,
                            message: 'आपका वोट सफलता पुर्बक हो गया | आपको बहुत बहुत धन्यवाद | '
                        }
                    );
                }
            },
                error => {
                    this.loading = 'false';
                    this.toaster.error(
                        {
                            error: true,
                            message: error.message
                        }
                    );
                }
            );
    }
}
