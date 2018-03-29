import {Routes} from '@angular/router';
import { TutorialsComponent } from './list'

export const route: Routes = [
    {
        path: '',
        component: TutorialsComponent,
        children: [
            {
                path: 'iife',
                loadChildren: 'app/dashboard/js-tutorials/iife/module#IIFEModule'
            },
            {
                path: 'closure',
                loadChildren: 'app/dashboard/js-tutorials/closure/module#ClosureModule'
            },
            {
                path: 'prototype',
                loadChildren: 'app/dashboard/js-tutorials/prototype/module#PrototypeModule'
            },
            {
                path: 'hoisting',
                loadChildren: 'app/dashboard/js-tutorials/hoisting/module#HoistingModule'
            },
            {
                path: 'designPattern',
                loadChildren: 'app/dashboard/js-tutorials/design-patterns/module#DesignPatternModule'
            },
            {
                path: 'currying',
                loadChildren: 'app/dashboard/js-tutorials/currying/module#CurryingModule'
            }
        ]
    }
]