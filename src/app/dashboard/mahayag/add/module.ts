import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ToasterModule } from '../../../_widgets/toaster/module';

import { AddPaymentComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [AddPaymentComponent],
    imports: [
        FormsModule,
        CommonModule,
        ToasterModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class AddPaymentModule {}
