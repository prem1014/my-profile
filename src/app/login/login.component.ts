import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService} from '../_core/api-service'
import { AuthService } from '../_core/auth-service';
import { Input } from '@angular/core/src/metadata/directives';
import { ToasterConfig } from 'angular2-toaster';
@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    styleUrls: ['./login.scss']
})

export class LoginComponent implements OnInit {
    public auth: any = {}
    public loading: string;
    public routesParams;
    public validUser: string;
    public toasterconfig;
    public toastr;

    constructor(private api: APIService, private authService: AuthService, private router: Router){
        this.api = api;
        this.authService = authService;
        this.router = router;
        this.toasterconfig = 
        new ToasterConfig({
            showCloseButton: true, 
            tapToDismiss: false, 
            timeout: 0,
            positionClass: 'toast-bottom-right'
        });
        this.toastr = this.api.getToaster();
    }
    ngOnInit() {
         sessionStorage.removeItem('isLoggedIn');
    }
    login() {
        this.loading = 'true'
        this.api.authenticateUser(this.auth.userId)
        .subscribe(data => {
            if(data.userCred.length > 0){
                if(data.userCred[0].password === this.auth.password){
                    this.loading = 'false'
                    this.validUser = 'true';
                    sessionStorage.setItem('isLoggedIn', 'true');
                    sessionStorage.setItem('userRole', JSON.stringify(data.userCred[0]));
                    this.api.userRole = data.userCred[0].role;
                    this.authService.saveUserInfo(data.userCred[0])
                    this.router.navigateByUrl('/dashboard');
                }
                else{
                    this.loading = 'false';
                    this.toastr.error('Please enter correct user id and password'); 
                }
            }
            else{
                this.loading = 'false';
                this.toastr.error('Please enter correct user id and password');
            }
        })
    }
}