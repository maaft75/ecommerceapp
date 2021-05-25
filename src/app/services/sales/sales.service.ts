import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private salesUrl : string = environment.apiSalesUrl;
  private salesCountUrl : string = environment.apiSalesUrl + "count?location=";
  private salesLocationUrl : string = environment.apiSalesUrl + "location?location=";
 
  constructor(private http : HttpClient) { }

  addSoldProducts(data) : Observable<any>{
    return this.http.post(this.salesUrl, data);
  }

  getSoldProductsByUser(userId : Number) : Observable<any>{
    return this.http.get(this.salesUrl + "user/" + userId);
  }
  
  getSalesFromLocation(location){
    return this.http.get(this.salesLocationUrl + location);
  }

  getSalesCount(location){
    return this.http.get(this.salesCountUrl + location);
  }

  //INDIVIDUAL COUNT OF A SOLD PRODUCT
  getIndividualCountOfSoldProduct(loc, name){
    return this.http.get(this.salesUrl + "individual/count?location=" + loc + "&name=" + name )
  }
}
