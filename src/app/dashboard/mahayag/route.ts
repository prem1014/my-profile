import { Routes } from '@angular/router';
import { MahayagComponent } from './component';
import { AuthGuard } from '../../_core/auth-guard';
export const route: Routes = [
    {
        path: '',
        component: MahayagComponent,
        children: [
            {
                path: 'add-payment',
                canActivate: [AuthGuard],
                loadChildren: 'app/dashboard/mahayag/add/module#AddPaymentModule'
            },
            {
                path: 'payment-details',
                canActivate: [AuthGuard],
                loadChildren: 'app/dashboard/mahayag/view/module#PaymentDetailsModule'
            }
        ]
    }
];
