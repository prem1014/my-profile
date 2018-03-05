import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './template.html',
    styleUrls: ['./ang-setup.scss']
})

export class CommonHeaderComponent implements OnInit {
    @Input() header: any;
    constructor(){}
    ngOnInit(){
        
    }
}