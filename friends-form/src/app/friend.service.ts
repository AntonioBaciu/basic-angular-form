import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Friend } from './friend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  urlAdd = 'http://localhost:9100/addFriend';
  urlDelete = 'http://localhost:9100/delete';
  allFriends: any = [];
  bestFriends: any = [];

  constructor(public http: HttpClient) { }

  addFriend(friend: Friend): Observable<any> {
    return this.http.post(this.urlAdd, friend);
  }

  deleteFriend(email): Observable<any> {
    return this.http.post(this.urlDelete, email);
  }

  async getAllFriends(url: string): Promise <any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return await this.http.get(url, options).toPromise()
      .then(data => this.allFriends = data);
  }

  async getBestFriends(url: string): Promise <any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return await this.http.get(url, options).toPromise()
      .then(data => this.bestFriends = data);
  }
}
