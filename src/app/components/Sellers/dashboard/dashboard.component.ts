import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Sellers/auth/auth.service';
import { ProductsService } from 'src/app/services/Sellers/products/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public seller : any;
  public sellerProducts : any;

  constructor(private auth : AuthService, private products : ProductsService) { }

  ngOnInit(): void {
    this.seller = JSON.parse(this.auth.GetSeller());
    this.GetProductsByUser();
  }

  GetProductsByUser(){
    this.products.GetProducts().subscribe(
      (data) => {
        this.sellerProducts = data.filter( x => x.seller.id == this.seller.id);
      })
  }

}
