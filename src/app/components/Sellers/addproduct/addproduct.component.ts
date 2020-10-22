import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService  } from 'src/app/services/Sellers/auth/auth.service';
import { ProductsService } from 'src/app/services/Sellers/products/products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  public productForm : FormGroup;
  public categoryForm : FormGroup;
  public sellerForm : FormGroup;

  constructor(private fb : FormBuilder, 
    private auth : AuthService,
    private products : ProductsService,
    private storage : AngularFireStorage,
    private router : Router) {
    let seller  = JSON.parse(this.auth.GetSeller());

    this.productForm = this.fb.group({
      "name" : [""],
      "imageUrl" : [""],
      "price" : [""],
      "quantity" : [""],
      "category" : this.fb.group({
        "name": [""] 
      }),
      "seller" : this.fb.group({
        "title" : [seller.title],
        "emailAddress" : [seller.emailAddress],
        "phoneNumber" : [seller.phoneNumber],
        "firstName" : [seller.firstName],
        "lastName" : [seller.lastName],
        "password":[seller.password],
        "storeName" : [seller.storeName],
        "storeUrl" : [seller.storeUrl],
        "description" : [seller.description],
        "street" : [seller.street],
        "city" : [seller.city],
        "state" : [seller.state]
      })
    })
 }

  ngOnInit(): void {
   this.products.GetProducts().subscribe((data) => console.log(data));
  }

}