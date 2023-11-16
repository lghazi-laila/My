import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SignInRequest } from '../Models/SignInRequest';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserAuthServiceService {

  private authURL: string = 'http://localhost:8080/v1/users/login';
  private token: string = "";

  constructor(private httpClient: HttpClient) { }

  authenticate(signInRequest: SignInRequest): Observable<any> {
    return this.httpClient.post(this.authURL, signInRequest).pipe(
      tap((response: any) => {
        if (response && response.data && response.data.token) {
          this.setToken(response.data.token);
        }
      })
    )
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
    console.log('Token saved:', token);
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

}
