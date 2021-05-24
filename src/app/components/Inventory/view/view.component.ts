import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SalesService } from 'src/app/services/sales/sales.service';
import { InventoryService } from 'src/app/services/inventory/inventory.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  locations : any = [];
  inventoryCount : any;
  inventoryTable : any = [];
  checkTrue : boolean = false;

  constructor(
    private authService : AuthService, 
    private salesService : SalesService,
    private inventoryService : InventoryService) { }

  ngOnInit(): void {
    this.authService.getLocations().subscribe((response) =>{
      this.locations = response;
    })
  }

  fetch(eve){
    this.checkTrue = true;

    this.inventoryService.getInventoriesCount(eve).subscribe((response) => {
      this.inventoryCount = response;
    })

    this.inventoryService.getInventoriesFromLocation(eve).subscribe((response) => {
      this.inventoryTable = response;
      this.inventoryTable.reverse();
    })
  }
}
