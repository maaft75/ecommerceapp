import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayproducts',
  templateUrl: './displayproducts.component.html',
  styleUrls: ['./displayproducts.component.css']
})
export class DisplayproductsComponent implements OnInit {

  public menProducts : any;
  public womenProducts : any;
  public categories : any;
  public itProducts : any;

  constructor(
    private getproducts : ProductsService, 
    private router : Router) 
    { }

  ngOnInit(): void {
    this.GetMenProducts();
    this.GetWomenProducts();
    this.GetItProducts();
  }

  GetMenProducts(){
    this.getproducts.GetProduct().subscribe(
      (data) => { this.menProducts = data.filter( x => x.category.name == "Men's Fashion" ) } 
    )
  }

  GetWomenProducts(){
    this.getproducts.GetProduct().subscribe(
      (data) => { this.womenProducts = data.filter( x => x.category.name == "Women's Fashion" ) } 
    )
  }

  GetItProducts(){
    this.getproducts.GetProduct().subscribe(
      (data) => { this.itProducts = data.filter( x => x.category.name == "IT" ) } 
    )
  }

  Details = (id) => {
    this.router.navigate(["productdetails", id]);
  }

}
