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

  constructor(private auth : AuthService, private productService : ProductsService) { }

  ngOnInit(): void {
    this.seller = JSON.parse(this.auth.GetSeller());
    this.GetProductsByUser();
  }

  GetProductsByUser(){
    this.productService.GetProducts().subscribe(
      (data) => {
        this.sellerProducts = data.filter( x => x.seller.id == this.seller.id);
      })
  }

  Delete(id){
    this.productService.DeleteProduct(id).subscribe(
      (data) => { alert(data); location.reload() }
    )
  }

}
