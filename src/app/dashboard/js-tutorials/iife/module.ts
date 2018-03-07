import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { route } from './route';
import { IIFEComponent } from './component';
import { LikeButtonModule } from '../../../_widgets/like-button/module';
import { CommonHeaderModule } from '../../../_widgets/common-header/module';
import { CommentModule } from '../../../_widgets/comment/module';
import { ScrollTrackerModule } from '../../../_widgets/scroll-tracker/modulte';

@NgModule({
    declarations: [IIFEComponent],
    imports: [
        RouterModule.forChild(route),
        LikeButtonModule,
        CommonHeaderModule,
        CommentModule,
        ScrollTrackerModule
    ],
    exports: [RouterModule]
})

export class IIFEModule {}