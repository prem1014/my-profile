import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AngSetupComponent } from './ang-setup';
import { CommonHeaderModule } from '../../../_widgets/common-header/module';
import { SlideAnimationModule } from '../../../_widgets/animation/module'

const route: Routes = [
    {
        path: '',
        component: AngSetupComponent
    }
]

@NgModule({
    declarations: [AngSetupComponent],
    imports: [
        CommonHeaderModule,
        SlideAnimationModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class AngSetupModule {}