import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public emptyList : any = [];
  public productForm : FormGroup;
  public numberOfProductsAdded : Number;
  public checkIfAnyProductHasBeenAdded : boolean = false;

  constructor(private fb : FormBuilder, private productService : ProductsService) {
    this.productForm = this.fb.group({
      "productName" : ["", Validators.required],
      "unitPrice": ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }

  addMoreSoldProducts(){
    this.emptyList.push(this.productForm.value);
    this.productForm.reset();
    this.checkIfAnyProductHasBeenAdded = true;
    this.numberOfProductsAdded = this.emptyList.length;
  }

  SaveProducts(){
    this.productService.addProduct(this.emptyList).subscribe((response) => {
      console.log(response);
    })
  }

  get productName(){
    return this.productForm.get("productName");
  }

  get unitPrice(){
    return this.productForm.get("unitPrice");
  } 
}
