import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-prototype',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class PrototypeComponent implements OnInit {
    public header;
    constructor(){
        this.header = {
            titleSrc: '../../../assets/js.jpg',
            title: 'Prototypes'
        }
    }
    ngOnInit(){}
}