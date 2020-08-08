import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registerUrl = environment.rootUrl + 'register';
  loginUrl = environment.rootUrl + 'login';
  
  constructor(private http : HttpClient) { }

  Register(data) : Observable<any> {
    return this.http.post(this.registerUrl, data)
  }

  Login(data) : Observable<any> {
    return this.http.post(this.loginUrl, data);
  }

  SaveToken(token){
    localStorage.setItem('token', token);
  }

  SaveUser(data){
    localStorage.setItem('user', JSON.stringify(data));
  }

  GetToken(){
    return localStorage.getItem('token');
  }

  GetUser(){
    return localStorage.getItem('user');
  }

  isAuthenticated(){
    if(this.GetToken()){
      return true;
    }
    return false;
  }

  DeleteToken(){
    return localStorage.removeItem('token');
  }

  DeleteUser(){
    return localStorage.removeItem('user');
  }
}

