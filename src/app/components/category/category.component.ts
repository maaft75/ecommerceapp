import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Interfaces/Product';
import { ProductsService } from 'src/app/services/Sellers/products/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categoryName : string;
  public products : Array<Product>;
  public productsByCategory : Array<Product>;

  constructor(
    private productService : ProductsService,
    private activatedRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.categoryName = params.category;
    })

    this.productService.GetProducts().subscribe(
      (data) => {
        this.products = data;
        this.productsByCategory = this.products.filter( p => { return p["category"].name == this.categoryName });
    })
  }   
}
