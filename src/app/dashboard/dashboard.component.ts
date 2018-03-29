import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { APIService } from '../_core/api-service';

import * as _ from 'lodash';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [
      trigger('slideInOut', [
        transition(':enter', [
          style({transform: 'translateY(-100%)'}),
          animate('800ms ease-in', style({transform: 'translateY(0%)'}))
        ]),
        transition(':leave', [
          animate('800ms ease-in', style({transform: 'translateY(-100%)'}))
        ])
      ])
    ]
})
export class DashboardComponent implements OnInit {
    contactDetails: any = [];
    isLoading: string = 'true';
    options: any;
    data: any;
    constructor(private api: APIService){
        this.api = api;
    }
    ngOnInit() {
        /*this.api.getMessageDetails()
        .subscribe(data => {
            this.contactDetails = data.messageDetails
            this.getDataForGraph(this.contactDetails);
            this.isLoading = 'false';
        });
        this.options = {
            chart: {
              type: 'discreteBarChart',
              height: 450,
              margin : {
                top: 20,
                right: 20,
                bottom: 50,
                left: 55
              },
              x: function(d){return d.label;},
              y: function(d){return d.value;},
              showValues: true,
              valueFormat: function(d){
                return d3.format(',.4f')(d);
              },
              duration: 500,
              xAxis: {
                axisLabel: 'X Axis'
              },
              yAxis: {
                axisLabel: 'Y Axis',
                axisLabelDistance: -10
              }
            }
          }
        this.data = [
            {
              key: "Cumulative Return",
              values: [
                {
                  "label" : "A" ,
                  "value" : 100
                } ,
                {
                  "label" : "B" ,
                  "value" : 80
                } 
              ]
            }
          ];*/
    }
    /*getDataForGraph(messages){
        var data;
        data = _.map(messages, (message) =>{
            var month = (new Date(message.messageDate).getMonth()) + 1;
            var messageData: any = {};
            if(month === 1){
                messageData.month = 'Jan';
                messageData.messageDate = message.messageDate;
            }
            else if(month === 2){
                messageData.month = 'Feb';
                messageData.messageDate = message.messageDate;
            }
            else if(month === 12){
                messageData.month = 'Dec';
                messageData.messageDate = message.messageDate;
            }
            return messageData;
        });
    }*/
};