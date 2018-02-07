import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { APIService } from './_core/api-service';
import { AuthService } from './_core/auth-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService]
})
export class AppComponent {
  userLoggedIn;
  isLoggedIn: string = 'false';
  router;
  public toasterconfig;
  constructor(router: Router, authService: AuthService, private api: APIService){
    this.toasterconfig = this.api.initToasterConfig();
    this.router = router;
    this.userLoggedIn = JSON.parse(sessionStorage.getItem('userRole'));
    if(this.userLoggedIn){
      this.isLoggedIn = 'true';
    }
    authService.userLoggedInAnnounced$.subscribe( userLoggedIn => {
      this.userLoggedIn = userLoggedIn;
      if(this.userLoggedIn){
        this.isLoggedIn = 'true';
      }
    });
  }
  logOut(event){
    event.preventDefault();
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userRole');
    this.userLoggedIn = JSON.parse(sessionStorage.getItem('userRole'));
    this.isLoggedIn = 'false';
    this.router.navigateByUrl('/login');
  }
}
