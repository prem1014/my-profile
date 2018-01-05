import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    
    constructor(private api: APIService, private authService: AuthService, private router: Router){
        this.api = api;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
         sessionStorage.removeItem('isLoggedIn');
    }
    login() {
        this.loading = 'true'
        this.api.authenticateUser(this.auth.userId)
        .subscribe(data => {
            if(data.userCred[0].password === this.auth.password){
                this.loading = 'false'
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
        })
    }
}