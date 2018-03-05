import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
      path: 'home',
      loadChildren: 'app/home/module#HomeModule'
    },
    { 
      path: 'contactMe',
      loadChildren: 'app/contact-me/module#ContactMeModule'
    },
    { 
      path: 'dashboard',
      loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
     },
    { 
      path: 'login', 
      loadChildren: 'app/login/module#LoginModule'
     },
    { 
      path: '401',
      loadChildren: 'app/error-401/module#Error401Module' 
    },
    { 
      path: 'signUp',
      loadChildren: 'app/sign-up/module#SignUpModule'
     },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
  ]