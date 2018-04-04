import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../../_core/toaster-service';

@Component({
    selector: 'app-toaster',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class ToasterComponent implements OnInit{
    public displayMessage: string;
    public isSuccessVisible: boolean = false;
    public isErrorVisible: boolean = false;
    constructor(private toaster: ToasterService){

    }
    ngOnInit(){
        this.toaster.toasterDetailsInAnnounced$.subscribe((data: any) => {
            if(data.success){
                this.success(data.message);
            }
            else if(data.error){
                this.error(data.message);
            }
        })
    }

    private success(message): void {
        this.displayMessage = message;
        this.isSuccessVisible = true;
        setTimeout(data => {
            this.isSuccessVisible = false;
        }, 5000)
    }
    private error(message): void {
        this.displayMessage = message;
        this.isErrorVisible = true;
        setTimeout(data => {
            this.isErrorVisible = false;
        }, 5000)
    }
}