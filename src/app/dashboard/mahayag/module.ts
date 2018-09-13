import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ToasterModule } from '../../_widgets/toaster/module';
import { SlideAnimationModule } from '../../_widgets/animation/module';
import { MahayagComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [MahayagComponent],
    imports: [
        SlideAnimationModule,
        ToasterModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class MahayagModule {}
