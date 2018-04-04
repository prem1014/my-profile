import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideAnimationModule } from '../../_widgets/animation/module';
import { TutorialsComponent } from './list'
import {route} from './route';

@NgModule({
    declarations: [TutorialsComponent],
    imports: [
        SlideAnimationModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class TutorialsModule {};