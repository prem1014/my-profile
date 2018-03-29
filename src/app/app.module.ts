import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {ToasterModule} from 'angular2-toaster';
import { APIService } from './_core/api-service';
import { AppComponent } from './app.component';
import { routes } from './routes';
import { AuthGuard } from './_core/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ToasterModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [APIService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
