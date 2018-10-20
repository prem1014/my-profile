import { Routes } from '@angular/router';

import { AuthGuard } from '../../_core/auth-guard';
import { VotersComponent } from './component';

export const routes: Routes = [
    {
        path: '',
        component: VotersComponent,
        children: [
            {
                path: 'add-voter',
                canActivate: [AuthGuard],
                loadChildren: 'app/dashboard/voters/add/module#AddVoterModule'
            },
            {
                path: 'voters-details',
                canActivate: [AuthGuard],
                loadChildren: 'app/dashboard/voters/view/module#ViewVoterModule'
            }
        ]
    }
];
