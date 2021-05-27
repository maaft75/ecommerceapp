import 'jspdf-autotable';
import jsPDF from 'jspdf';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalesService } from 'src/app/services//sales/sales.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { InventoryService } from 'src/app/services/inventory/inventory.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  
  public sales : any;
  public userId : Number;
  public unitprice : any;
  public inventory : any;
  public userName : Number;
  public totalprice : Number;
  public salesForm : FormGroup;
  public toBePrinted : any = [];
  public allProducts : any = [];
  public allSavedProducts : any = [];
  public loginButton : boolean = true;
  public numberOfProductsAdded : Number;
  public printModal : string = "display : none";
  public checkIfAnyProductHasBeenAdded : boolean = false;

  public head : any = [['Name', 'Quantity', 'Unit Price', 'Total Price']];
  
  constructor(
    private fb : FormBuilder, 
    private authService : AuthService, 
    private salesService : SalesService,
    private productService : ProductsService,
    private inventoryService : InventoryService) { 
    this.salesForm = this.fb.group({
      "name" : ["", Validators.required],
      "quantity" : ["", Validators.required],
      "unit_Price" : ["", Validators.required],
      "total_Price" : ["", Validators.required],
      "soldBy" : this.fb.group({
          "id": ["", Validators.required],
          "name": ["", Validators.required],
          "password": ["", Validators.required],
          "role": ["", Validators.required],
          "location": ["", Validators.required],
      })
    })
  }

  ngOnInit(): void {
    this.userId = Number(this.authService.getId());

    this.salesForm = this.fb.group({
      "name" : ["", Validators.required],
      "quantity" : ["", Validators.required],
      "unit_Price" : ["", Validators.required],
      "total_Price" : ["", Validators.required],
      "soldBy" : this.fb.group({
          "id": [this.userId],
          "name": ["string", Validators.required],
          "password": ["string", Validators.required],
          "role": ["string", Validators.required],
          "location": ["string", Validators.required],
      })
    })

    this.productService.getAllProducts().subscribe((data) => {
      this.allSavedProducts = data;
    })

    this.authService.getUser(this.userId).subscribe((response) => {this.userName = response["name"]})
  }

  addMoreSoldProducts(){

    let location = this.authService.getLocationFromLocalStorage();

    let name = this.salesForm.get("name").value;

    this.salesService.getIndividualCountOfSoldProduct(location, name).subscribe((response) => {
      this.sales = response;
      this.inventoryService.getIndividualCountOfProductFromTheInventory(location, name).subscribe((response) => {
        this.inventory = response;

        let checkIfProductIsAvailable = Number(this.sales.count) >= Number(this.inventory.count)

        if(checkIfProductIsAvailable){
          alert("This product is currently not available in the store")
          this.salesForm.reset();
        }
        else
        {
          this.salesForm.patchValue( { soldBy : { id : this.userId} });
          this.salesForm.patchValue( { soldBy : { name : "string"} });
          this.salesForm.patchValue( { soldBy : { password : "string"} });
          this.salesForm.patchValue( { soldBy : { role : "string"} });
          this.salesForm.patchValue( { soldBy : { location : "string"} });

          this.allProducts.push(this.salesForm.value);
          this.salesForm.reset();
          this.checkIfAnyProductHasBeenAdded = true;
          this.numberOfProductsAdded = this.allProducts.length;
        }
        
      })
    })
  }
  
  SaveSoldProducts(){
    this.loginButton = false;
    this.salesService.addSoldProducts(this.allProducts).subscribe(
      (response) => {
      this.toBePrinted = response;
      this.printModal = "display : block";
    }, 
    (error) => {
      alert("An error has occured.")
    })
  }
  
  onNameChange(eve){
    this.allSavedProducts.forEach(x => {
      if(x.productName == eve){this.unitprice = x.unitPrice};
      this.salesForm.patchValue( { unit_Price : this.unitprice });
    });
  }
  
  onQuantityChange(eve){
   this.totalprice = this.unitprice * eve;
    this.salesForm.patchValue( { total_Price : this.totalprice });
  }

  get name(){
    return this.salesForm.get("name");
  }

  get quantity(){
    return this.salesForm.get("quantity");
  }

  get unit_Price(){
    return this.salesForm.get("unit_Price");
  } 

  get total_Price(){
    return this.salesForm.get("total_Price");
  }

  printReceipt(){
    var doc = new jsPDF('p', 'mm', 'a3');

    
    doc.setFontSize(18);
    doc.text('Receipt', 131, 8);
    doc.text(`Order No : ${this.userName}`, 10, 90);
    doc.text(`SOLD BY : ${this.userName}`, 10, 100);
    doc.setFontSize(11);
    doc.setTextColor(100);

    let pdfData : any = [];

    this.toBePrinted.forEach(element => {
      var data = [element["name"], element["quantity"], element["unit_Price"], element["total_Price"]];
      pdfData.push(data);
    });

    (doc as any).autoTable({
      head: this.head,
      body:  pdfData,
      theme: 'striped',
      didDrawCell: data => {
        console.log(data.column.index)
      }
    })

    // Open PDF document in new tab
    doc.output('dataurlnewwindow')

    // Download PDF document  
    let name = "salesOrder" + ".pdf"
  
    doc.save(name);
    location.reload();
  }
}