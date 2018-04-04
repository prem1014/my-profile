import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrototypeComponent } from './component';
import { route } from './route';
import { LikeButtonModule } from '../../../_widgets/like-button/module';
import { CommonHeaderModule } from '../../../_widgets/common-header/module';
import { CommentModule } from '../../../_widgets/comment/module';
import { ScrollTrackerModule } from '../../../_widgets/scroll-tracker/modulte';
import { ScrollTopModule } from '../../../_widgets/scroll-top/module';
import { SlideAnimationModule } from '../../../_widgets/animation/module'

@NgModule({
    imports: [
        RouterModule.forChild(route),
        LikeButtonModule,
        CommonHeaderModule,
        CommentModule,
        ScrollTrackerModule,
        ScrollTopModule,
        SlideAnimationModule
    ],
    declarations: [PrototypeComponent],
    exports: [
        RouterModule
    ]
})

export class PrototypeModule {}