import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()

export class ToasterService {
    public toasterData;
    public isToasterLive: boolean = false;
    private toasterDetails = new Subject<any>();
    toasterDetailsInAnnounced$ = this.toasterDetails.asObservable();

    public success(toasterDetails): void {
        this.toasterDetails.next(toasterDetails);
    }

    public error(toasterDetails): void {
        this.toasterDetails.next(toasterDetails);
    }

    public keepToasterLive(isToasterLive: boolean):void {
        this.isToasterLive = isToasterLive;
    }
}