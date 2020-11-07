import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/Sellers/products/products.service';

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
    private router : Router,
    private category : ProductsService) 
    { }

  ngOnInit(): void {
    this.category.GetCategory().subscribe(
      (data) => { this.categories = data.slice(0,5);console.log(this.categories)}
    );
  }


  /*GetMenProducts(){
    this.getproducts.GetProduct().subscribe(
      (data) => { this.menProducts = data.filter( x => x.category.name == "Men's Fashion" ).reverse().slice(0,4) } 
    )
  } */
}
