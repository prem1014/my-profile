import { NgModule } from '@angular/core';
import { HoistingComponent } from './component';
import { RouterModule, Router } from '@angular/router';
import { LikeButtonModule } from '../../../_widgets/like-button/module';
import { CommonHeaderModule } from '../../../_widgets/common-header/module';
import { CommentModule } from '../../../_widgets/comment/module';
import { ScrollTrackerModule } from '../../../_widgets/scroll-tracker/modulte';
import { ScrollTopModule } from '../../../_widgets/scroll-top/module';
import { route } from './route';
@NgModule({
    declarations: [
        HoistingComponent
    ],
    imports: [
        RouterModule.forChild(route),
        LikeButtonModule,
        CommonHeaderModule,
        CommentModule,
        ScrollTrackerModule,
        ScrollTopModule
    ],
    exports: [
        RouterModule
    ]
})

export class HoistingModule {}