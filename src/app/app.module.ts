import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routes } from './routes';

import { ScrollTopModule } from './_widgets/scroll-top/module';
import { ToasterModule } from './_widgets/toaster/module';
import { ApiService } from './_core/api.service';
import { AuthGuard } from './_core/auth-guard';
import { ToasterService } from './_core/toaster-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToasterModule,
    ScrollTopModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [ApiService, AuthGuard, ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
