import { Observable } from 'rxjs';
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
  
  getUser(id) : Observable<any>{
    return this.http.get(environment.apiAuthUrl + id);
  }

  getRoles() : Observable<any>{
    return this.http.get(this.roleUrl);
  }

  getLocations() : Observable<any>{
    return this.http.get(this.locationUrl);
  }

  login(data) : Observable<any>{
    return this.http.post<any>(this.loginUrl, data);
  }

  createUser(data) : Observable<any>{
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

  saveLocation(location){
    localStorage.setItem("location", location);
  }

  getId(){
    return localStorage.getItem("id");
  }

  getRoleFromLocalStorage(){
    return localStorage.getItem("role");
  }

  getLocationFromLocalStorage(){
    return localStorage.getItem("location");
  }

  getToken(){
    return localStorage.getItem("token");
  }

  clearLocalStorage(){
    localStorage.clear();
  }
}
