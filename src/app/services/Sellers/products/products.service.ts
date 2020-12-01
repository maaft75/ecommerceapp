import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Interfaces/Product';
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

  GetProductsById(id){
    return this.http.get<Product>(this.productUrl + id)
  }

  GetCategory = () : Observable<any> => {
    return this.http.get(this.categoryUrl);
  }
 
  AddProducts(product) : Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.auth.GetToken()}`)
    headers = headers.set('Accept', 'application/json')
    headers = headers.set('Content-Type', 'application/json')
    return this.http.post<Product>(this.productUrl, product, {headers})
  }

  EditProduct(id, product){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.auth.GetToken()}`)
    //headers = headers.set('Accept', 'application/json')
    //headers = headers.set('Content-Type', 'application/json')
    return this.http.put<Product>(this.productUrl + id, product, {headers, responseType:'text' as 'json'})
  }

  DeleteProduct(id){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.auth.GetToken()}`)
    headers = headers.set('Accept', 'application/json')
    headers = headers.set('Content-Type', 'application/json')
    return this.http.delete(this.productUrl, {headers})
  }
}