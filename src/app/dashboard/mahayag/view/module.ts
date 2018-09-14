import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PaymentDetailsComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [PaymentDetailsComponent],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class PaymentDetailsModule {}
