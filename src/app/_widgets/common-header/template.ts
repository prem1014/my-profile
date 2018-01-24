import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './template.html',
    styleUrls: ['./ang-setup.scss']
})

export class CommonHeaderComponent implements OnInit {
    @Input() title: string;
    public headerTitle: string;
    constructor(){}
    ngOnInit(){
        this.headerTitle = this.title
    }
}