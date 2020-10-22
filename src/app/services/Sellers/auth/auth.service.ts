import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Seller } from '../../../../app/Interfaces/Seller';
import { Login } from '../../../../app/Interfaces/Login';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private registerUrl : string = environment.sellerUrl + "register";
  private loginUrl : string = environment.sellerUrl + "login";

  constructor(private http : HttpClient) { }

  Register = (data) : Observable<Seller> => {
    return this.http.post<Seller>(this.registerUrl, data);
  }

  Login = (data) : Observable<any> => {
    return this.http.post<Login>(this.loginUrl, data);
  }

  SaveSeller = (seller) => {
    localStorage.setItem('seller', JSON.stringify(seller))
  }
  
  SaveToken = (token) => {
    localStorage.setItem('token', token);
  }

  GetToken = () => {
    localStorage.getItem('token');
  }

  GetSeller = () => {
    return localStorage.getItem('seller');
  }

  isAuthenticated = () => {
    if(this.GetSeller() != null ){
      return true;
    }else{
      return false;
    }
  }
  
}
