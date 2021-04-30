import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private roleUrl : string = environment.apiAuthUrl + "roles";
  private loginUrl : string = environment.apiAuthUrl + "login";
  private locationUrl : string = environment.apiAuthUrl + "location";
  private createUserUrl : string = environment.apiAuthUrl + "createuser";

  constructor(private http : HttpClient) { }
  
  getRoles(){
    return this.http.get(this.roleUrl);
  }

  getLocations(){
    return this.http.get(this.locationUrl);
  }

  login(data){
    return this.http.post<any>(this.loginUrl, data);
  }

  createUser(data){
    return this.http.post<any>(this.createUserUrl, data);
  }

  saveId(id){
    localStorage.setItem("id", id);
  }

  saveRole(role){
    localStorage.setItem("role", role);
  }

  saveToken(token){
    localStorage.setItem("token", token);
  }

  getId(){
    return localStorage.getItem("id");
  }

  getRoleFromLocalStorage(){
    return localStorage.getItem("role");
  }

  getToken(){
    return localStorage.getItem("token");
  }

  clearLocalStorage(){
    localStorage.clear();
  }
}
