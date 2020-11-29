import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Interfaces/Product';
import { ProductsService } from 'src/app/services/Sellers/products/products.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  public product : any;
  constructor(
    private activatedRoute : ActivatedRoute,
    private productService : ProductsService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        //console.log(+params.id);
        this.productService.GetProductsById(+params.id).subscribe(data => {
          this.product = data;
          console.log(this.product);
      })
    })
  }

}
