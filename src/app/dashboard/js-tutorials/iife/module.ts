import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import IIFEComponent from './component';
import { route } from './route';
import { CommonHeaderModule } from '../../../_widgets/common-header/module';

@NgModule({
    declarations: [IIFEComponent],
    imports: [
        CommonHeaderModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class IIFEModule {}