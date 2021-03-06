import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { SlideAnimationModule } from '../../_widgets/animation/module';
import { AngularTutorialComponent} from './list';

const routes: Routes = [
    {
        path: '',
        component: AngularTutorialComponent,
        children: [
            {
                path: 'angSetup',
                loadChildren: 'app/dashboard/angular-tutorial/ang-setup/module#AngSetupModule'
            },
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
        SlideAnimationModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class AngularTutorialModule {};