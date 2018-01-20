import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'personalInfo',
        loadChildren: 'app/personal-detail/module#PersonalDetailModule'
      }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModule { }