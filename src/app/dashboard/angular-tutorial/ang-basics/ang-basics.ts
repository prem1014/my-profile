import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-ang-basics',
    templateUrl: './ang-basics.html',
    styleUrls: ['./ang-basics.scss']
})

export class AngBasicsComponent implements OnInit {
    public buildingsBlocks = [];
    constructor(){
        this.buildingsBlocks = [
            {
                name: 'Modules'
            },
            {
                name: 'Components'
            },
            {
                name: 'Templates'
            },
            {
                name: 'Metadata'
            },
            {
                name: 'Data binding'
            },
            {
                name: 'Directives'
            },
            {
                name: 'Services'
            },
            {
                name: 'Dependency Injection'
            }
        ]
    }
    ngOnInit(){
        
    }
}