import { Component, OnInit } from '@angular/core';

import { APIService } from '../_core/api-service';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss']
})
export class PersonalDetailComponent implements OnInit {
  private experience: any = {};
  constructor(private api: APIService) {
    this.api = api;
  }

  ngOnInit() {
  }
  save(): void {
    this.experience.totalExp = this.api.getTotalExperience(this.experience.startDate, this.experience.endDate)
    this.api.save({ experience: this.experience }).subscribe(data => console.log(data.message));
  }
}
