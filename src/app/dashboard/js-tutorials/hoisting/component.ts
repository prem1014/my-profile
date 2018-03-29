import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hoisting',
    templateUrl: './component.html',
})

export class HoistingComponent implements OnInit {
    public header;
    constructor(){
        this.header = {
            titleSrc: '../../../assets/js.jpg',
            title: 'Hoisting'
        }
    }

    ngOnInit(){
        
    }
}