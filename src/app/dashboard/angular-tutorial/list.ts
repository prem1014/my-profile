import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
    selector: 'app-angular-tutorial',
    templateUrl: './list.html',
    styleUrls: ['./list.scss'],
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

export class AngularTutorialComponent implements OnInit {
    constructor(){

    }
    ngOnInit(){

    }
}