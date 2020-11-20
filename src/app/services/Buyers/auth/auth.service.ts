import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/Interfaces/Login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registrationUrl = environment.buyerUrl + 'register';
  private loginUrl = environment.buyerUrl + 'login';

  constructor(private http : HttpClient) { }

  register(data) : Observable<any> {
    return this.http.post<any>(this.registrationUrl, data);
  }

  login(data) : Observable<any>{
    return this.http.post<Login>(this.loginUrl, data)
  }

  saveToken(token){
    localStorage.setItem('token', token);
  }

  saveBuyer(buyer){
    localStorage.setItem('buyer', buyer);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getBuyer(){
    return localStorage.getItem('buyer');
  }
}
