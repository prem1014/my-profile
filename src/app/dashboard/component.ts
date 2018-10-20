import { Component, OnInit } from '@angular/core';

import { Chart } from 'angular-highcharts';
import { ApiService } from '../_core/api.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-dashboard',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class DashboardComponent implements OnInit {
    public voteDetails;
    public candidateVoteDetails;
    public user;
    public chart;
    public loading;
    private isMenuClicked: boolean;
    constructor(private api: ApiService) {
    }

    ngOnInit() {
        this.user = JSON.parse(sessionStorage.getItem('userRole'));
        if (this.user === null) {
            this.user = {
                role: null
            };
        }
        this.getVoteDetails();
    }

    private getVoteDetails(): void {
        this.loading = 'true';
        this.api.getVoteDetails()
            .subscribe(
                (data: any) => {
                    this.loading = 'false';
                    this.voteDetails = data.voteDetails;
                    this.candidateVoteDetails = [
                        {
                            color: '#03A9F4',
                            candiateName: 'Sanjay Ray(Kunti Devi)',
                            totalVote: this.getVoteByCandidateName(this.voteDetails, 'Sanjay Ray(Kunti Devi)'),
                        },
                        {
                            color: '#FF9800',
                            candiateName: 'Rambabu Ray Sir',
                            totalVote: this.getVoteByCandidateName(this.voteDetails, 'Rambabu Ray Sir')
                        },
                        {
                            color: '#FF5722',
                            candiateName: 'Vijay Thakur',
                            totalVote: this.getVoteByCandidateName(this.voteDetails, 'Vijay Thakur')
                        },
                        {
                            color: '#009688',
                            candiateName: 'Prabhunath Ray',
                            totalVote: this.getVoteByCandidateName(this.voteDetails, 'Prabhunath Ray')
                        }
                    ]
                    this.candidateVoteDetails[0].voteShare = this.getVoteShare(this.candidateVoteDetails[0].totalVote, this.voteDetails.length);
                    this.candidateVoteDetails[1].voteShare = this.getVoteShare(this.candidateVoteDetails[1].totalVote, this.voteDetails.length);
                    this.candidateVoteDetails[2].voteShare = this.getVoteShare(this.candidateVoteDetails[2].totalVote, this.voteDetails.length);
                    this.candidateVoteDetails[3].voteShare = this.getVoteShare(this.candidateVoteDetails[3].totalVote, this.voteDetails.length);
                    //this.candidateVoteDetails[0].voteShare = this.getVoteShare(this.candidateVoteDetails[4].totalVote, this.voteDetails.length);
                    this.plotGraph(this.candidateVoteDetails);
                },
                (error: any) => {
                    this.loading = 'false';
                }
            )
    }

    private getVoteByCandidateName(vote, name) {
        return _.filter(vote, { candiateName: name }).length;
    }

    private getVoteShare(individualVote, totalVote) {
        return ((individualVote / totalVote) * 100) + '%';
    }

    private plotGraph(vote: any) {
        let voteDetails = _.cloneDeep(vote);
        let CandidateList = _.map(voteDetails, d => {
            return d.candiateName;
        })
        let totalVote = _.map(voteDetails, d => {
            return { y: d.totalVote, color: d.color };
        })
        this.chart = new Chart({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Vote Details'
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: CandidateList,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Vote'
                }
            },
            series: [{
                name: 'Total Vote',
                data: totalVote
            }]
        });
    }

    private toggleMenu () {
        this.isMenuClicked = ! this.isMenuClicked;
    }
}
