import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PaymentDetailsComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [PaymentDetailsComponent],
    imports: [
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class PaymentDetailsModule {}
