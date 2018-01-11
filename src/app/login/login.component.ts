import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ToasterService, ToasterConfig} from 'angular2-toaster';
import { APIService} from '../_core/api-service'
import { AuthService } from '../_core/auth-service';
import { Input } from '@angular/core/src/metadata/directives';
@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    styleUrls: ['./login.scss']
})

export class LoginComponent implements OnInit {
    private auth: any = {}
    private loading: string;
    private routesParams;
    private validUser: string;
    
    constructor(private api: APIService, private toasterService: ToasterService, private authService: AuthService, private router: Router){
        this.api = api;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
         sessionStorage.removeItem('isLoggedIn');
    }
    public toasterconfig : ToasterConfig = 
    new ToasterConfig({
        showCloseButton: true, 
        tapToDismiss: false, 
        timeout: 0,
        positionClass: 'toast-bottom-right'
    });
    login() {
        this.loading = 'true'
        this.api.authenticateUser(this.auth.userId)
        .subscribe(data => {
            if(data.userCred[0].password === this.auth.password){
                this.loading = 'false'
                this.validUser = 'true';
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('userRole', JSON.stringify(data.userCred[0]));
                this.api.userRole = data.userCred[0].role;
                this.authService.saveUserInfo(data.userCred[0])
                if(this.api.userRole === 'Admin'){
                    this.router.navigateByUrl('/dashboard');
                }
                else{
                    this.router.navigateByUrl('/home')
                }
            }
            else{
                this.loading = 'false';
                this.toasterService.pop('error', '', 'Please enter correct user id and password'); 
            }
        })
    }
}