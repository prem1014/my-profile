import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToasterModule } from '../../_widgets/toaster/module';
import { SlideAnimationModule } from '../../_widgets/animation/module';

import { VotersComponent } from './component';
import { routes } from './routes';

@NgModule({
    declarations: [
        VotersComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FormsModule,
        CommonModule,
        ToasterModule,
        SlideAnimationModule
    ],
    exports: [RouterModule]
})

export class VotersModule {}
