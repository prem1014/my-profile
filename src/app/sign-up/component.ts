import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../_core/api.service'
import { ToasterService } from '../_core/toaster-service';

@Component({
    selector: 'app-signup',
    templateUrl: './component.html'
})

export class SignUpComponent implements OnInit {
    public user: any = {};
    public loading;
    public toasterconfig;
    public toastr;
    constructor(private api: ApiService, private router: Router, private toaster: ToasterService) {
        this.user.role = 'Normal';
    }
    ngOnInit() {
    }
    signUp() {
        this.loading = 'true'
        this.api.saveSignUpDetails(this.user)
            .subscribe(
                data => {
                    this.loading = 'false'
                    this.toaster.success(
                        {
                            success: true,
                            message: 'Thank you for your registrtion !!!!'
                        }
                    )
                    setTimeout((data) => {
                        this.router.navigateByUrl('/login');
                    }, 5000)
                },
                error => {
                    this.loading = 'false'
                    this.toaster.error(
                        {
                            error: true,
                            message: error.message
                        }
                    )
                }
            );
    }
}