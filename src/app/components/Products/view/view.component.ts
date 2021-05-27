import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  sales : any;
  inventory : any;
  product : string;
  location : string;
  net_goods : Number;
  locations : any = [];
  allProducts : any = [];
  popUpModal : boolean = false;
  
  constructor(
    private authService : AuthService,
    private salesService : SalesService,
    private productsService : ProductsService,
    private inventoryService : InventoryService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((response) => {
      this.allProducts = response;
    })

    this.authService.getLocations().subscribe((response) =>{
      this.locations = response;
    })
  }

  fetch(eve){
    this.location = eve;
  }

  fetchCount(name){
  
    this.salesService.getIndividualCountOfSoldProduct(this.location, name).subscribe((response) => {
      this.sales = response;
      this.product = name;
      this.inventoryService.getIndividualCountOfProductFromTheInventory(this.location, name).subscribe((response) => {
        this.inventory = response;
        this.net_goods = Number(this.inventory.count) - Number(this.sales.count);
        this.popUpModal = true;
      })
    })
  }

  closePinModal(){
    this.popUpModal = false;
  }
}