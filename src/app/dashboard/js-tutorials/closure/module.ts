import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { route } from './route';
import { ClosureComponent } from './component';
import { LikeButtonModule } from '../../../_widgets/like-button/module';
import { CommonHeaderModule } from '../../../_widgets/common-header/module';
import { CommentModule } from '../../../_widgets/comment/module';

@NgModule({
    declarations: [ClosureComponent],
    imports: [
        RouterModule.forChild(route),
        LikeButtonModule,
        CommonHeaderModule,
        CommentModule
    ],
    exports: [RouterModule]
})

export class ClosureModule {}