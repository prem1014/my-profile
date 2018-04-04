import { Routes } from '@angular/router';

import { DashboardComponent } from './component';
import { AuthGuard } from '../_core/auth-guard';

export const route: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'personalInfo',
        canActivate: [AuthGuard],
        loadChildren: 'app/personal-detail/module#PersonalDetailModule'
      },
      {
        path: 'jsTutorials',
        loadChildren: 'app/dashboard/js-tutorials/module#TutorialsModule'
      },
      {
        path: 'angTutorials',
        loadChildren: 'app/dashboard/angular-tutorial/module#AngularTutorialModule'
      },
      {
        path: 'myAsset',
        canActivate: [AuthGuard],
        loadChildren: 'app/dashboard/my-asset/module#MyAssetModule'
      },
      {
        path: 'voting',
        loadChildren: 'app/dashboard/voting/module#VotingModule'
      }
    ]
  }
];