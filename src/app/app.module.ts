import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ToasterModule} from 'angular2-toaster';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';

import { APIService } from './_core/api-service';
import { AppComponent } from './app.component';
import { AuthGuard } from './_core/auth-guard.service';

const appRoutes: Routes = [
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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ToasterModule,
    NvD3Module,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [APIService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
