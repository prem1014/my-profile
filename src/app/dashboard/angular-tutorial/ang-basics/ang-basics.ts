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
                name: 'Modules',
                intro: 'Angular apps are modular and it has at least one module that acts as '+ 
                'root module. Angular has its own modularity system called NgModules. One '+ 
                'can divide an app into several feature modules and all modules will be part of '+ 
                'main root module.An NgModule, whether a root or feature, is a class with an @NgModule decorator.'
            },
            {
                name: 'Components',
                intro: 'A component controls the view part of an application. '+
                'You can define the business logic inside the component class to control the view. '+
                'Angular creates, updates, and destroys components as the user moves through the application.'
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