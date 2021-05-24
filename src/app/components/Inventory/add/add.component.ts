import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public locationList : any = [];
  public InventoryForm : FormGroup;
  public moreProductsList : any = [];
  public allSavedProducts : any = [];
  public numberOfProductsAdded : Number;
  public checkIfAnyProductHasBeenAdded : boolean = false;

  constructor(
    private fb : FormBuilder,
    private authService : AuthService,
    private productService : ProductsService,
    private inventoryService : InventoryService) {
    this.InventoryForm = this.fb.group({
      "name": ["", Validators.required],
      "quantity": ["", Validators.required],
      "location_Sent": ["", Validators.required],
    })
   }

  ngOnInit(): void {
    this.authService.getLocations().subscribe((data) => {
      this.locationList = data;
    })

    this.productService.getAllProducts().subscribe((data) => {
      this.allSavedProducts = data;
    })
  }

  AddMoreProducts(){
    this.moreProductsList.push(this.InventoryForm.value);
    this.InventoryForm.reset();
    this.checkIfAnyProductHasBeenAdded = true;
    this.numberOfProductsAdded = this.moreProductsList.length;
  }

  SaveProducts(){
    this.inventoryService.addProductToInventory(this.moreProductsList).subscribe((response) => {
      alert(`${this.moreProductsList.length} Products successfully saved.`);
      window.location.href = environment.frontendUrl + "dashboard";
    })
  }

  get name(){
    return this.InventoryForm.get("name");
  }

  get quantity(){
    return this.InventoryForm.get("quantity");
  }

  get location_Sent(){
    return this.InventoryForm.get("location_Sent");
  }
}
