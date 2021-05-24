import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsUrl : string = environment.apiProductUrl;

  constructor(private http : HttpClient) { }

  addProduct(data) : Observable<any>{
    return this.http.post(this.productsUrl, data);
  }

  getAllProducts() : Observable<any>{
    return this.http.get(this.productsUrl);
  }
}
