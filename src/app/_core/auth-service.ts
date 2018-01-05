import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
 
@Injectable()
export class AuthService {
 
  // Observable string sources
  private userDetails = new Subject<any>();
 
  // Observable string streams
  userLoggedInAnnounced$ = this.userDetails.asObservable();
 
  // Service message commandsut
  saveUserInfo(userDetails: any) {
    this.userDetails.next(userDetails);
  };
}