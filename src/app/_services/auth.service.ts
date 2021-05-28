import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:5000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedin: boolean;
  constructor(private http: HttpClient) { 
    this.loggedin = false;
  }

  login(name: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + "api/login", {
      name,
      password
    }, httpOptions);
  }

  isLoggedIn(){
    this.http.get(AUTH_API + "api/secret").subscribe(
      data => {
        this.loggedin = true;
      }, 
      error => {
        alert(error.message);
        this.loggedin = false;
      }
    );
    return this.loggedin;
  }

  
}