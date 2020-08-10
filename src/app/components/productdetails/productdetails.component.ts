import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  public productId : number;
  public product;
  public productName : string;
  constructor(
    private activatedroute : ActivatedRoute, 
    private getproducts : ProductsService,
    private router : Router) {}

  ngOnInit(): void {

    this.activatedroute.params.subscribe(
      (params) => { this.productId = params["id"]}
    )

    this.getproducts.GetProductById(this.productId).subscribe(
      (data) => {this.product = data}
    )
  }

  Details = (id) => {
    this.router.navigate(["productdetails", id]);
  }
  

}
