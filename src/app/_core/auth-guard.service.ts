import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { APIService }      from './api-service';

@Injectable()
export class AuthGuard implements CanActivate {
    private user;
    constructor(private api: APIService, private router: Router) {}
    
      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
    
        return this.checkLogin(url);
      }
      checkLogin(url: string): boolean {
         this.user = JSON.parse(sessionStorage.getItem('userRole'));
        if (sessionStorage.getItem('isLoggedIn') ==='true' && this.user.role  === 'Admin') { 
            return true;
         }
         else if(sessionStorage.getItem('isLoggedIn') ==='true' && this.user.role === 'Normal'){
           if(url === '/personalInfo' || url === '/dashboard'){
             this.router.navigate(['/401']);
             return true;
           }
         }
        // Store the attempted URL for redirecting
        this.api.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
      }
}