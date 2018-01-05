import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APIService } from './_core/api-service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard }                from './_core/auth-guard.service';
import { Error401Component } from './error-401/401';
import { SignUpComponent } from './sign-up/sign-up';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'personalInfo', component: PersonalDetailComponent, canActivate: [AuthGuard] },
  { path: 'contactMe', component: ContactMeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '401', component: Error401Component },
  { path: 'signUp', component: SignUpComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalDetailComponent,
    ContactMeComponent,
    DashboardComponent,
    LoginComponent,
    Error401Component,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [APIService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
