import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  public ProductForm : FormGroup;
  public Category : any;
  public ProductId : Number;
  public Products : any;
  public user : any;

  constructor(
    private fb : FormBuilder,
    private auth : AuthService, 
    private getproduct : ProductsService, 
    private activatedroute : ActivatedRoute,
    private route : Router
    ) 
    { 
      let user = JSON.parse(this.auth.GetUser());
      
      this.ProductForm = this.fb.group({
        "Name" : [""],
        "Price" : [""],
        "Quantity" : [""],
        "ImageUrl" : [""],
        "Sellerdetails" : this.fb.group({
          "id" : [user.id],
          "Title" : [user.title],
          "FirstName" : [user.firstName],
          "LastName" : [user.lastName],
          "EmailAddress" : [user.emailAddress],
          "Password" : [user.password],
          "StoreName" : [user.storeName],
          "StoreUrl" : [user.storeUrl],
          "Description" : [user.description],
          "State" : [user.state],
          "LGA" : [user.lga],
          "City" : [user.city],
          "PhoneNumber" : [user.phoneNumber],
          "Street" : [user.street]
        }),
        "Category" : this.fb.group({
          "Name" : [""],
        })
      });
    }

  ngOnInit(): void {

    this.GetCategory();

    this.activatedroute.params.subscribe(params => {
      this.ProductId = params["id"]
    });

    this.user = this.GetUser();

    this.getproduct.GetProductById(this.ProductId).subscribe(data => {
      this.Products = data; 

      console.log(this.Products);

      this.ProductForm = this.fb.group({
        "Id" : [this.Products.id],
        "Name" : [this.Products.name],
        "Price" : [this.Products.price],
        "Quantity" : [this.Products.quantity],
        "ImageUrl" : [this.Products.imageUrl],
        "Sellerdetails" : this.fb.group({
          "id" : [this.user.id],
          "Title" : [this.user.title],
          "FirstName" : [this.user.firstName],
          "LastName" : [this.user.lastName],
          "EmailAddress" : [this.user.emailAddress],
          "Password" : [this.user.password],
          "StoreName" : [this.user.storeName],
          "StoreUrl" : [this.user.storeUrl],
          "Description" : [this.user.description],
          "State" : [this.user.state],
          "LGA" : [this.user.lga],
          "City" : [this.user.city],
          "PhoneNumber" : [this.user.phoneNumber],
          "Street" : [this.user.street]
        }),
        "Category" : this.fb.group({
          "id" : [this.Products.category.id],
          "Name" : [this.Products.category.name],
        })
      });
    })
  }

  GetCategory(){
    this.getproduct.GetCategory().subscribe(
      data => { this.Category = data}
    )
  }

  GetUser(){
    return JSON.parse(this.auth.GetUser());
  }

  UpdateProduct(){
    console.log(this.ProductForm.value);
    this.getproduct.UpdateProduct(this.Products.id, this.ProductForm.value).subscribe(data => {
      alert("Product Updated!");
      this.route.navigate(["userproducts"]);
    }) 
  }

}
