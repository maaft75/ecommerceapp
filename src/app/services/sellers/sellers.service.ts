import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class SellersService {

  private rootUrl:string = 'https://localhost:44319/sellerdetails';

  constructor(private http : HttpClient) { }

  AddSeller(seller): Observable<any> {
    return this.http.post<any>(this.rootUrl, seller);
  }
}
