import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AngBasicsComponent } from './ang-basics';
import { CommonHeaderModule } from '../../../_widgets/common-header/module';
import { SlideAnimationModule } from '../../../_widgets/animation/module'

const routes: Routes = [
    {
        path: '',
        component: AngBasicsComponent
    }
]
@NgModule({
    declarations: [AngBasicsComponent],
    imports: [
        CommonModule,
        CommonHeaderModule,
        SlideAnimationModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class AngBasicsModule {};