import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User, Authentication } from '../models/user';


@Injectable()
export class AuthService {
  constructor(private http: Http) { }

  login = (auth: Authentication): Observable<User> => {



    const user = new User();

    return (this.http.post(environment.apiBaseUrl + '/users/authenticate', { username: auth.username, password: auth.password }).
      map((response: Response) => {
        // login successful if there's a jwt token in the response
        const usr = response.json();
        console.table(response);
        if (usr && usr.token) {
          user._id = usr._id;
          user.email = usr.email;
          user.firstName = usr.username;
          user.lastName = "Bar";
          user.token = usr.token;
        }

        return user;
      }));


  }

  facebookAuth = (): Observable<User> => {
    console.log('reach auth service');
    const user = new User();
    this.http.get(environment.apiBaseUrl + '/login/facebook')
      .map((response: Response) => {
        console.log('auth response :' + response);
        // login successful if there's a jwt token in the response
        const usr = response.json();
        if (usr && usr.token) {
          user._id = usr._id;
          user.email = usr.email;
          user.firstName = usr.username;
          user.lastName = "Bar";
          user.token = usr.token;
        }
      });

    return of(user);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
