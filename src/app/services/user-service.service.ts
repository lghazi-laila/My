import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url : string;

  constructor(private httpClient: HttpClient) { 
    this.url = "http://localhost:8080/v1/users";
  }

  private getToken(): HttpHeaders {
    const authToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    return headers;
  }

  public getAll(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.url+'/all')
  }

  public getTest(){
    const headers = this.getToken();
    return this.httpClient.get(`${this.url}/test`, { headers });
  }

  public getWithPagination(): Observable<User[]>{
    const headers = this.getToken();
    return this.httpClient.get<User[]>(`${this.url}`, {headers});
  }

  public getUserWithId(Id: string){
    const headers = this.getToken();
    return this.httpClient.get(`${this.url}/${Id}`, {headers});
  }

  public deleteUserWithId(Id : string){
    const headers = this.getToken();
    return this.httpClient.delete(`${this.url}/${Id}`, {headers})
  }
}
