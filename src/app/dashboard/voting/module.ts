import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

import { ToasterModule } from '../../_widgets/toaster/module';
import { SlideAnimationModule } from '../../_widgets/animation/module';
import { VotingComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [VotingComponent],
    imports: [
        SlideAnimationModule,
        FormsModule,
        CommonModule,
        ToasterModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class VotingModule {}