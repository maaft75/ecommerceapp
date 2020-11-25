import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Interfaces/Product';
import { AuthService } from 'src/app/services/Sellers/auth/auth.service';
import { ProductsService } from 'src/app/services/Sellers/products/products.service';

@Component({ 
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public productName : string;
  public allProducts : Array<Product>;
  public searchResults : Array<Product>;
  
  constructor(
    private products : ProductsService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      data => {
        this.productName = data.productName; 
        console.log(this.productName)
    })

    this.products.GetProducts().subscribe(data => {
      this.allProducts = data;
      this.searchResults = this.allProducts.filter(x => {return x.name.toLocaleLowerCase().includes(this.productName.toLocaleLowerCase())});
      console.log(this.searchResults)
    })
  }

}
