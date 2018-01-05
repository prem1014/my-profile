import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import * as moment from 'moment';
import * as _ from 'lodash';

@Injectable()
export class APIService {
  // Resolve HTTP using the constructor
  private aboutMe: any = {};
  public redirectUrl: string;
  public userRole: string;
  private summary: string = 'Hello, I am Prem Prakash.I am a front end developer who always looks to enhance technical skill in web technology which help me to build a user friendly web application.I love to create highly interactive web application using new web technologies. I have worked on various web technologies like HTML, HTML5, CSS, CSS3, Responsive, Javascripts, Jquery, Jquery Mobile, Angular Js';
  constructor(private http: Http) {
  }
  // private instance variable to hold base url
  //private apiUrl = 'http://localhost:8080/api/';
  private apiUrl = 'https://myprofileapi.herokuapp.com/api/'

  getTotalExperience(startDate, endDate) {
    return (moment(new Date(startDate)).diff(moment(new Date(endDate)), 'month')).toString().split('-')[1];
  }
  save(experience) {
    return this.http.post(this.apiUrl + 'myDetails', experience)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getMyDetails() {
    return this.http.get(this.apiUrl + 'myDetails')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  saveMessage(messageDetails) {
    return this.http.post(this.apiUrl + 'contact', messageDetails)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getMessageDetails() {
    return this.http.get(this.apiUrl + 'contact')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  authenticateUser(userId: any){
    return this.http.get(this.apiUrl+ 'login'+'/'+userId)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}

