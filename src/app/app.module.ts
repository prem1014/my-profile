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
import { HomeComponent } from './home/home.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard }                from './_core/auth-guard.service';
import { Error401Component } from './error-401/401';
import { SignUpComponent } from './sign-up/sign-up';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contactMe',
    loadChildren: 'app/contact-me/module#ContactMeModule'
  },
  { path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard]
   },
  { path: 'login', component: LoginComponent },
  { path: '401', component: Error401Component },
  { path: 'signUp', component: SignUpComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalDetailComponent,
    LoginComponent,
    Error401Component,
    SignUpComponent
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
