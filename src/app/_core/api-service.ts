import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ToasterService, ToasterConfig } from 'angular2-toaster';
import { Observable } from 'rxjs/Rx'
import * as moment from 'moment';
import * as _ from 'lodash';
import { retry } from 'rxjs/operators/retry';

@Injectable()
export class APIService {
  // Resolve HTTP using the constructor
  private aboutMe: any = {};
  public redirectUrl: string;
  public userRole: string;
  public toasterconfig: ToasterConfig;
  private summary: string = 'Hello, I am Prem Prakash.I am a front end developer who always looks to enhance technical skill in web technology which help me to build a user friendly web application.I love to create highly interactive web application using new web technologies. I have worked on various web technologies like HTML, HTML5, CSS, CSS3, Responsive Design, Javascripts, Jquery, Jquery Mobile, Angular 1.x, Angular 2/4';
  constructor(private http: Http, private toasterService: ToasterService) {
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
  authenticateUser(userId: any) {
    return this.http.get(this.apiUrl + 'login' + '/' + userId)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  saveSignUpDetails(user: any) {
    return this.http.post(this.apiUrl + 'login', { user: user })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveAssetDetails(asset: any) {
    return this.http.post(this.apiUrl + 'asset', { asset: asset })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveExpenseDetails(expense: any) {
    return this.http.post(this.apiUrl + 'expense', { expense: expense })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getAsset(id) {
    return this.http.get(this.apiUrl + 'asset' + '/' + id)
      .map((res: Response) => res.json())
      .catch(
      (error: any) =>
        Observable.throw(error.json().error || 'Server error')
      );
  }

  getExpense(id) {
    return this.http.get(this.apiUrl + 'expense' + '/' + id)
    .map((res: Response) => res.json())
    .catch(
    (error: any) =>
      Observable.throw(error.json().error || 'Server error')
    );
  }

  saveLike(feedback) {
    return this.http.post(this.apiUrl + 'feedbackLike', { feedback: feedback })
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getLikes(tutorialName) {
    return this.http.get(this.apiUrl + 'feedbackLike' + '/' + tutorialName)
    .map((res: Response) => res.json())
    .catch(
    (error: any) =>
      Observable.throw(error.json().error || 'Server error')
    );
  }

  saveComment(commentDetails){
    return this.http.post(this.apiUrl + 'feedbackComment', {commentDetails: commentDetails})
    .map((res: Response) => res.json())
    .catch(
      (error: any) =>
         Observable.throw(error.json().error || 'Server Error')
    )
  }

  getComments(tutorialName) {
    return this.http.get(this.apiUrl + 'feedbackComment' + '/' + tutorialName)
    .map((res: Response) => res.json())
    .catch(
    (error: any) =>
      Observable.throw(error.json().error || 'Server error')
    );
  }

  initToasterConfig() {
    this.toasterconfig =
      new ToasterConfig({
        showCloseButton: true,
        tapToDismiss: false,
        timeout: 0,
        positionClass: 'toast-bottom-right'
      });
    return this.toasterconfig;
  }
  getToaster() {
    var service = this;
    let toaster = {
      success: function (message) {
        service.toasterService.pop('success', message);
      },
      error: function (message) {
        service.toasterService.pop('error', message);
      }
    }
    return toaster;
  }
}

