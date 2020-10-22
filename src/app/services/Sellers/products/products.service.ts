import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productUrl = environment.productUrl;

  constructor(private http : HttpClient, private auth : AuthService) { }

  GetProducts() : Observable<any>{
    //let headers = new HttpHeaders();
    //headers = headers.set('Authorization', `Bearer ${this.auth.GetToken()}`)
    //return this.http.get<any>(this.productUrl, {headers});
    return this.http.get(this.productUrl);
  }

  GetProduct() : Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.auth.GetToken()}`)
    return this.http.get(this.productUrl, {headers});
  }
}