import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ToasterModule } from '../_widgets/toaster/module';
import { SlideAnimationModule } from '../_widgets/animation/module';
import { HomeComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        ToasterModule,
        SlideAnimationModule,
        RouterModule.forChild(route),
    ],
    exports: [RouterModule]
})

export class HomeModule {}