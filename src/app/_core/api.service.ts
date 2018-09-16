import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject }    from 'rxjs/Subject';

import * as moment from 'moment';

@Injectable()
export class ApiService {
  private aboutMe: any = {};
  public redirectUrl: string;
  public userRole: string;
  // private instance variable to hold base url
  private apiUrl = 'http://localhost:8080/api/';
  //private apiUrl = 'https://myprofileapi.herokuapp.com/api/';
  constructor(private http: HttpClient) {

  }
  // Observable string sources
  private userDetails = new Subject<any>();
  userLoggedInAnnounced$ = this.userDetails.asObservable();

  public getMyDetails() {
    return this.http.get(this.apiUrl + 'myDetails');
  }

  public authenticateUser(userId: any) {
    return this.http.get(this.apiUrl + 'login' + '/' + userId)
  }

  public saveUserInfo(user: any) {
    this.userDetails.next(user);
  }

  public saveSignUpDetails(user: any) {
    return this.http.post(this.apiUrl + 'login', { user: user });
  }

  public saveAssetDetails(asset: any) {
    return this.http.post(this.apiUrl + 'asset', { asset: asset })
  }

  public saveExpenseDetails(expense: any) {
    return this.http.post(this.apiUrl + 'expense', { expense: expense })
  }

  public getAsset(id) {
    return this.http.get(this.apiUrl + 'asset' + '/' + id)

  }

  public getExpense(id) {
    return this.http.get(this.apiUrl + 'expense' + '/' + id)

  }

  public saveLike(feedback) {
    return this.http.post(this.apiUrl + 'feedbackLike', { feedback: feedback })
  }
  public getLikes(tutorialName) {
    return this.http.get(this.apiUrl + 'feedbackLike' + '/' + tutorialName)

  }

  public saveComment(commentDetails) {
    return this.http.post(this.apiUrl + 'feedbackComment', { commentDetails: commentDetails })

  }

  public getComments(tutorialName) {
    return this.http.get(this.apiUrl + 'feedbackComment' + '/' + tutorialName)

  }

  public getTotalExperience(startDate, endDate) {
    return (moment(new Date(startDate)).diff(moment(new Date(endDate)), 'month')).toString().split('-')[1];
  }

  public save(experience) {
    return this.http.post(this.apiUrl + 'myDetails', experience)
  }

  public saveMessage(messageDetails) {
    return this.http.post(this.apiUrl + 'contact', messageDetails)
  }

  public saveVote(voteDetails) {
    return this.http.post(this.apiUrl + 'vote', {voteDetails: voteDetails})
  }

  public getVoteDetails() {
    return this.http.get(this.apiUrl + 'vote');
  }

  public saveChanda(chandaDetails: any) {
    return this.http.post(this.apiUrl + 'chandaDetails', chandaDetails);
  }

  public getChanda() {
    return this.http.get(this.apiUrl + 'chandaDetails');
  }

  public deleteChanda (id) {
    return this.http.delete(this.apiUrl + 'chandaDetails/' + id);
  }
}
