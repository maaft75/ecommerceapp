import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private inventoryUrl : string = environment.apiInventoryUrl;
  private inventoryCountUrl : string = environment.apiInventoryUrl + "count?location=";
  private inventoryLocationUrl : string = environment.apiInventoryUrl + "location?location=";

  constructor(private http : HttpClient) { }

  addProductToInventory(data) : Observable<any>{
    return this.http.post(this.inventoryUrl, data);
  }

  getAllProductsInInventory() : Observable<any>{
    return this.http.get(this.inventoryUrl)
  }

  getInventoriesFromLocation?(location){
    return this.http.get(this.inventoryLocationUrl + location);
  }

  getInventoriesCount?(location){
    return this.http.get(this.inventoryCountUrl + location);
  }
}
