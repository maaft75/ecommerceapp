import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-displayproducts',
  templateUrl: './displayproducts.component.html',
  styleUrls: ['./displayproducts.component.css']
})
export class DisplayproductsComponent implements OnInit {

  
  public url : string;
  public products : any;
  title : string = 'Angular'

  constructor(private getproducts : ProductsService, private auth : AuthService) { }

  ngOnInit(): void {
    this.GetProducts();
  }

  GetProducts(){
    this.getproducts.GetProduct().subscribe(
      (data) => { this.products = data; } 
    )
  }
}
