import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AngularTutorialComponent} from './list';

const routes: Routes = [
    {
        path: '',
        component: AngularTutorialComponent,
        children: [
            {
                path: 'angBasics',
                loadChildren: 'app/dashboard/angular-tutorial/ang-basics/module#AngBasicsModule'
            }
        ]
    }
]
@NgModule({
    declarations: [
        AngularTutorialComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class AngularTutorialModule {};