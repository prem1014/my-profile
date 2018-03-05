import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ang-setup',
    templateUrl: './ang-setup.html',
    styleUrls: ['./ang-setup.scss']
})

export class AngSetupComponent implements OnInit {
    public header: any
    constructor() {
        this.header = {
            titleSrc: '../../../assets/ang.png',
            title: 'angular Set up'
        }
    }
    ngOnInit(){
        
    }
}