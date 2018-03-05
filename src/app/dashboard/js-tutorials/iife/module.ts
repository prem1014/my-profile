import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import IIFEComponent from './component';
import { route } from './route';
import { LikeButtonModule } from '../../../_widgets/like-button/module';
import { CommonHeaderModule } from '../../../_widgets/common-header/module';

@NgModule({
    declarations: [IIFEComponent],
    imports: [
        LikeButtonModule,
        CommonHeaderModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class IIFEModule {}