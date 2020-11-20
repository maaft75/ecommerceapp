import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/Sellers/products/products.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public fashions : any;
  public electronics : any;
  public categories : any;
  public phones : any;

  constructor(
    private router : Router,
    private productService : ProductsService) 
    { }

  ngOnInit(): void {
    this.productService.GetCategory().subscribe(
      (data) => { 
        this.categories = data.slice(0,5);
      });

    this.productService.GetProducts().subscribe(
      (data) => {
        this.fashions = data.filter(x => x.category.name == "Fashion").slice(0,6);
      })

    this.productService.GetProducts().subscribe(
      (data) => {
        this.phones = data.filter(x => x.category.name == "Phones").slice(0,6);
      })

    this.productService.GetProducts().subscribe(
      (data) => {
        this.electronics = data.filter(x => x.category.name == "Electronics").slice(0,6);
      })
  }
}
