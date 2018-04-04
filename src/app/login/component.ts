import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService} from '../_core/api.service'
import { ToasterService } from '../_core/toaster-service';

@Component({
    selector: 'app-login',
    templateUrl: './component.html'
})

export class LoginComponent implements OnInit {
    public auth: any = {}
    public loading: string;
    public routesParams;
    public validUser: string;

    constructor(private api: ApiService, private router: Router, private toaster: ToasterService){

    }

    ngOnInit(){
        sessionStorage.removeItem('isLoggedIn');
    }

    public login() {
        this.loading = 'true'
        this.api.authenticateUser(this.auth.userId)
        .subscribe(data => {
            let authenticationDetails: any = data;
            if(authenticationDetails.userCred.length > 0){
                if(authenticationDetails.userCred[0].password === this.auth.password){
                    this.loading = 'false'
                    this.validUser = 'true';
                    sessionStorage.setItem('isLoggedIn', 'true');
                    sessionStorage.setItem('userRole', JSON.stringify(authenticationDetails.userCred[0]));
                    this.api.userRole = authenticationDetails.userCred[0].role;
                    this.api.saveUserInfo(authenticationDetails.userCred[0])
                    if(this.api.redirectUrl){
                        this.router.navigateByUrl(this.api.redirectUrl);
                    }
                    else{
                        this.router.navigateByUrl('/dashboard');
                    }
                    this.toaster.success({success: true, message: 'You logged in successfully'})
                }
                else{
                    this.loading = 'false';
                    this.toaster.error(
                        {
                            error: true,
                            message: 'Please enter correct user id and password'}
                    )
                }
            }
            else{
                this.loading = 'false';
                this.toaster.error(
                    {
                        error: true,
                        message: 'Please enter correct user id and password'}
                )
            }
        },
        error => {
            this.loading = 'false';
            this.toaster.error(
                {
                    error: true,
                    message: error.message
                }
            )
        }
    )
    }
}