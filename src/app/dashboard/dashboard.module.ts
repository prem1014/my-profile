import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../_core/auth-guard.service';
const routes: Routes = [
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
      }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardModule { }