import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  sharedData : Array<Product>;

  constructor() { }
}
