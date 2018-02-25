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
            }
        ]
    }
]