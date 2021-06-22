import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {shareReplay, tap} from 'rxjs/operators';

import * as moment from 'moment';
import * as jwt_decode from 'jwt-decode';

const API_URL = 'http://localhost:5000/api/';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(name: string, password: string) {
    return this.http.post<User>(API_URL + 'login', {name, password})
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

  /* OPGAVE 4: derde deel
     Deze methode haalt het expiratie moment weer uit de local storage, parseert het als JSON
     en retourneert de waarde daarvan. Je kunt (opnieuw) gebruik maken van de library 'moments'
     om de opgeslagen waarde weer om te zetten in een moment.
 */

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
