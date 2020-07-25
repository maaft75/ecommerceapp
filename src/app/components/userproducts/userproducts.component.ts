import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-userproducts',
  templateUrl: './userproducts.component.html',
  styleUrls: ['./userproducts.component.css']
})
export class UserproductsComponent implements OnInit {

  public url : string;
  public products : any;

  constructor(private getproducts : ProductsService, private auth : AuthService) { }

  ngOnInit(): void {
    this.GetProducts();
  }

  public user = JSON.parse(this.auth.GetUser());

  GetProducts(){
    this.getproducts.GetProduct().subscribe(
      (data) => {
        this.products = data.filter(x => x.sellerdetails.storename == this.user.storeName);
      } 
    )
  }
              
  Delete(id){
    this.getproducts.DeleteProduct(id).subscribe(
      data => { this.GetProducts() }
    )
  }

}
