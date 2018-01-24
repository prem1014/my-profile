import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AngSetupComponent } from './ang-setup';
import { CommonHeaderModule } from '../../../_widgets/common-header/module';

const route: Routes = [
    {
        path: '',
        component: AngSetupComponent
    }
]

@NgModule({
    declarations: [AngSetupComponent],
    imports: [
        CommonHeaderModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class AngSetupModule {}