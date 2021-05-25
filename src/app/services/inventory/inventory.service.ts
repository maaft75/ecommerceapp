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

  //GET ALL PRODUCTS IN THE INVENTORY
  getAllProductsInInventory() : Observable<any>{
    return this.http.get(this.inventoryUrl)
  }

  //COUNT OF ALL INVENTORY
  getInventoriesCount(location) : Observable<any>{
    return this.http.get(this.inventoryCountUrl + location);
  }

  //GET PAGINATED INVENTORY FROM A CERTAIN LOCATION
  getInventoriesFromLocation(location) : Observable<any>{
    return this.http.get(this.inventoryLocationUrl + location);
  }

  //INDIVIDUAL COUNT OF A SOLD PRODUCT
  getIndividualCountOfProductFromTheInventory(loc, name){
    return this.http.get(this.inventoryUrl + "individual/count?location=" + loc + "&name=" + name )
  }
}
