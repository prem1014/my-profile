import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../_core/api.service';
import { ToasterService } from '../../_core/toaster-service';
import * as moment from 'moment';
@Component({
    selector: 'app-voting',
    templateUrl: './component.html'
})

export class MahayagComponent implements OnInit {

    constructor(private api: ApiService, private toaster: ToasterService) {

    }
    ngOnInit() {

    }
}