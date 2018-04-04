import { Component, OnInit } from '@angular/core';

import { ApiService } from '../_core/api.service';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-personal-detail',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
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
export class PersonalDetailComponent implements OnInit {
  experience: any = {};
  constructor(private api: ApiService) {
    this.api = api;
  }

  ngOnInit() {
  }
  save(): void {
    this.experience.totalExp = this.api.getTotalExperience(this.experience.startDate, this.experience.endDate)
    this.api.save({ experience: this.experience }).subscribe((data: any) => console.log(data.message));
  }
}
