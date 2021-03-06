import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {shareReplay, tap} from 'rxjs/operators';

//import * as bcrypt from 'bcryptjs'
import * as moment from 'moment';

import jwt_decode from 'jwt-decode';

// const API_URL = 'http://localhost:5000/api/';
const API_URL = 'http://localhost:8080/api'
export interface InfoMessage {
  message: string;
}
@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  decodeToken(): any{
    let token = localStorage.getItem("id_token");
    if(token === null){
      return null;
    }

    try{
      return jwt_decode(token);
    }
    catch(Error){
      return null;
    }
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

  register(name: string, password: string, email: string){
    const formData = new FormData();
    formData.set("username", name);
    formData.set("password", password);
    formData.set("email", email);
    return this.http.post<InfoMessage>(API_URL + "/register", formData)
    .pipe(
      tap(
        res => console.log(res),
        err => this.handleError(err),
      ),
      shareReplay()
    );
  }
  
  public isLoggedIn() {
    let token = localStorage.getItem("id_token");
    if(token == null){
      return false;
    }

    
    return moment().isBefore(this.getExpiration()) && this.verifyToken(token);
  }

  private async verifyToken(token: string){
    const formData = new FormData();
    formData.set("token", token);
    const t = await this.http.post<InfoMessage>(API_URL + "/isvalidtoken", formData).toPromise();
    return t.message === "ok";
  }

  private setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem('id_token', authResult.token);
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

  public getLoggedInUserName() : string|undefined {
    let username: string|undefined;

    try{
      let token = localStorage.getItem('id_token');
      if (token){
        let decoded = jwt_decode<any>(token)
        username = decoded.name;
      }
    } catch(Error){
      console.log(Error);
    }
    return username;
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
