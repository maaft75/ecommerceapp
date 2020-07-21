import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-displayproducts',
  templateUrl: './displayproducts.component.html',
  styleUrls: ['./displayproducts.component.css']
})
export class DisplayproductsComponent implements OnInit {

  public products : any;
  public url : string;

  constructor(private getproducts : ProductsService) { }

  ngOnInit(): void {
    this.GetProducts();
  }

  GetProducts(){
    this.getproducts.GetProduct().subscribe(
      (data) => { this.products = data; }
    )
  }
              
  Delete(id){
    this.getproducts.DeleteProduct(id).subscribe(
      data => { this.GetProducts() }
    )
  }

  createImage(serverPath : string){
    return `C:/dtracks/Backend/Backend/Resources/Images/20181117_125536.jpg`;
  }
}
