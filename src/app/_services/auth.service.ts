import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://apibackend.local/api/auth/';//Url api

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email,
      password
    }, httpOptions);
  }

  register(userFirstName: string, userLastName: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      userFirstName,
      userLastName,
      email,
      password
    }, httpOptions);
  }
}
