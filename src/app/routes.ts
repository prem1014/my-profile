import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: 'app/home/module#HomeModule'
    },
    {
        path: 'login',
        loadChildren: 'app/login/module#LoginModule'
    },
    {
        path: 'dashboard',
        loadChildren: 'app/dashboard/module#DashboardModule'
    },
    {
        path: 'signup',
        loadChildren: 'app/sign-up/module#SignUpModule'
    },
    {
        path: '401',
        loadChildren: 'app/error-401/module#Error401Module'
    },
    {
        path: 'contactMe',
        loadChildren: 'app/contact-me/module#ContactMeModule'
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
]