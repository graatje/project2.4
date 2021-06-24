import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {shareReplay, tap} from 'rxjs/operators';

import * as moment from 'moment';
import * as jwt_decode from 'jwt-decode';

// const API_URL = 'http://localhost:5000/api/';
const API_URL = 'http://localhost:8080/api'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(name: string, password: string) {
    const formData = new FormData();
    formData.set("name", name);
    formData.set("password", password);
    return this.http.post<User>(API_URL + '/login', formData)
      .pipe(
        tap(
          res => this.setSession(res),
          err => this.handleError(err),
        ),
        shareReplay()
      );
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  private setSession(authResult: any) {
    console.log("Setting session");
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  public logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    let expiresAt;
    if (expiration != null) {
      expiresAt = JSON.parse(expiration);
    }
    else{
      expiresAt = JSON.parse('10000');  // is past now. this should never happen.
      console.log("look into line 56 of auth.service.");
      console.log(expiration);
    }
    return moment(expiresAt);
  }

  private handleError(error: any) {
    console.error('ERROR...');
    console.log(error);
  }
}

interface User {
  name: String,
  password: String,
}
