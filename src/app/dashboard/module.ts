import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'angular-highcharts';
import { DashboardComponent } from './component';
import { route } from './route';
import { SlideAnimationModule } from '../_widgets/animation/module';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        SlideAnimationModule,
        ChartModule,
        RouterModule.forChild(route),
    ],
    exports: [RouterModule]
})

export class DashboardModule {}