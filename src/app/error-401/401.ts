import { Component, OnInit } from '@angular/core' ;
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
    selector : 'app-401',
    templateUrl: './401.html',
    styleUrls: ['./401.scss'],
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

export class Error401Component implements OnInit {

    ngOnInit(){

    }
}