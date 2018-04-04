import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from './_core/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public userLoggedIn;
  public isLoggedIn: string = 'false';

  constructor(private router: Router, private api: ApiService){
    this.userLoggedIn = JSON.parse(sessionStorage.getItem('userRole'));
    if(this.userLoggedIn){
      this.isLoggedIn = 'true';
    }
    this.api.userLoggedInAnnounced$.subscribe( userLoggedIn => {
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
    this.api.redirectUrl = undefined;
    this.router.navigateByUrl('/login');
  }
}
