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
  categoryUrl = environment.categoryUrl;

  constructor(private http : HttpClient, private auth : AuthService) { }

  GetProducts() : Observable<any>{
    return this.http.get(this.productUrl);
  }

  GetCategory = () : Observable<any> => {
    return this.http.get(this.categoryUrl);
  }

  AddProducts(product) : Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.auth.GetToken()}`)
    headers = headers.set('Accept', 'application/json')
    headers = headers.set('Content-Type', 'application/json')
    return this.http.post<any>(this.productUrl, product, {headers})
  }
  
}