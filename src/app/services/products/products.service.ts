import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsUrl = environment.productUrl;
  categoryUrl = environment.categoryUrl;
  imageUrl = environment.productUrl + 'AddImage';

  constructor(private http : HttpClient, private auth: AuthService) { }

  GetProduct() : Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.auth.GetToken()}`)
    return this.http.get(this.productsUrl, {headers});
  }

  PostProduct(products) : Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.auth.GetToken()}`)
    headers = headers.set('Accept', 'application/json')
    headers = headers.set('Content-Type', 'application/json')
    return this.http.post(this.productsUrl, products, {headers});
  }

  DeleteProduct(id) : Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.auth.GetToken()}`);
    return this.http.delete(this.productsUrl + id, {headers});
  }

  UpdateProduct(id, data){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.auth.GetToken()}`);
    return this.http.put(this.productsUrl , data, {headers})
  }

  GetCategory(){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.auth.GetToken()}`)
    return this.http.get(this.categoryUrl, {headers})
  }

  UploadImage(data){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.auth.GetToken()}`)
    return this.http.post(this.imageUrl, data, {headers, reportProgress:true, observe:'events'})
  }
}
