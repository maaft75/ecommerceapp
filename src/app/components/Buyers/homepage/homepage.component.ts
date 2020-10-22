import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public menProducts : any;
  public womenProducts : any;
  public categories : any;
  public itProducts : any;

  constructor(
    //private getproducts : ProductsService, 
    private router : Router) 
    { }

  ngOnInit(): void {
    /*this.GetMenProducts();
    this.GetWomenProducts();
    this.GetItProducts();*/
  }

  /*GetMenProducts(){
    this.getproducts.GetProduct().subscribe(
      (data) => { this.menProducts = data.filter( x => x.category.name == "Men's Fashion" ).reverse().slice(0,4) } 
    )
  }

  GetWomenProducts(){
    this.getproducts.GetProduct().subscribe(
      (data) => { this.womenProducts = data.filter( x => x.category.name == "Women's Fashion" ).reverse().slice(0,4) } 
    )
  }

  GetItProducts(){
    this.getproducts.GetProduct().subscribe(
      (data) => { this.itProducts = data.filter( x => x.category.name == "IT" ).reverse().slice(0,4) } 
    )
  }

  Details = (id) => {
    this.router.navigate(["productdetails", id]);
  }*/
}