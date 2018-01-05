import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';

import { APIService } from '../_core/api-service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private myDetails: any = {};
    private isLoading: boolean;

    constructor(private api: APIService) {
        this.api = api;
    }

    ngOnInit() {
        this.isLoading = true;
        this.api.getMyDetails().subscribe(data => {
            this.isLoading = false;
            this.myDetails.experience = data.experience;
            this.myDetails.education = [
                {
                    universityName: 'RGPV Bhopal',
                    yop: '2007-2011',
                    class: 'BE(Electronics and Communication)',
                    division: 'First(75.4%)'
                },
                {
                    universityName: 'BIEC Patna',
                    yop: '2004-2006',
                    class: 'Intermediate(PCM)',
                    division: 'First(61.0%)'
                },
                {
                    universityName: 'BSEB Patna',
                    yop: '2004',
                    class: 'Matriculation',
                    division: 'First(64.0%)'
                }
            ];
            this.myDetails.summary = 'Hello, I am Prem Prakash.I am a front end developer who always looks to enhance technical skill in web technology which help me to build a user friendly web application.I love to create highly interactive web application using new web technologies.I have worked on various web technologies like HTML, HTML5, CSS, CSS3, Responsive, Javascripts, Jquery, Jquery Mobile, Angular Js'
            this.myDetails.experience = _.map(this.myDetails.experience, (exp => {
                exp.todayDate = new Date();
                exp.startDate = new Date(exp.startDate);
                if(exp.company === 'Wipro Technology'){
                    exp.endDate = new Date();
                    var a = moment(exp.startDate,'M/D/YYYY');
                    var b = moment(exp.endDate,'M/D/YYYY');
                    var diffDays = b.diff(a, 'month');
                    exp.totalExp = diffDays;
                    return exp;
                }
                exp.endDate = new Date(exp.endDate);
                return exp;
            }));
            this.myDetails.totalExp = this.getTotalMonths(this.myDetails.experience);
        });
    }
    getTotalMonths(experience) {
        return _.sumBy(experience, function (d) {
            d.totalExp = Number(d.totalExp);
            return d.totalExp;
        });
    }
}