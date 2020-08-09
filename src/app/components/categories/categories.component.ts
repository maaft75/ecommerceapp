import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoryLink : string;
  categoryProducts : any;
  constructor(
    private activatedRoute : ActivatedRoute,
    private getproducts : ProductsService
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => { this.categoryLink = params["category"]; console.log(this.categoryLink)}
    )
    this.GetProductsByCategories();
  }

  GetProductsByCategories = () => {
    this.getproducts.GetProduct().subscribe( data => 
      { 
        this.categoryProducts = data.filter(x => x.category.name == this.categoryLink);
        console.log(this.categoryProducts)
      }
    )}

}
