import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from 'src/app/services/Sellers/auth/auth.service';
import { ProductsService } from 'src/app/services/Sellers/products/products.service';
import { Category } from 'src/app/Interfaces/Category';
import { Product } from 'src/app/Interfaces/Product';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  public name: any;
  public response: any;
  public toUploadFile: any;
  public selectedFiles: any;
  public productId : Number;
  public updateForm : FormGroup;
  public productToBeUpdated : Product;
  public Categories : Array<Category>;

  constructor(
    private fb : FormBuilder,
    private auth : AuthService,
    private router : Router,
    private storage : AngularFireStorage,
    private activatedRoute : ActivatedRoute,
    private productService : ProductsService) { 
      let seller  = JSON.parse(this.auth.GetSeller());
      this.updateForm = this.fb.group({
        "id":[""],
        "name" : [""],
        "imageUrl" : [""],
        "price" : [""],
        "quantity" : [""],
        "category" : this.fb.group({
          "id": [""]
        }),
        "seller" : this.fb.group({
          "id" : [seller.id],
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

    this.activatedRoute.params.subscribe(
      (data) => {
        this.productId = +data.id;
        this.productService.GetProductsById(this.productId).subscribe(
          (data) => {
            this.productToBeUpdated = data;
            this.selectedFiles = this.productToBeUpdated.imageUrl;
            let seller  = JSON.parse(this.auth.GetSeller());
            this.updateForm = this.fb.group({
              "id" : [this.productToBeUpdated.id],
              "name" : [this.productToBeUpdated.name],
              "imageUrl" : [this.productToBeUpdated.imageUrl],
              "price" : [this.productToBeUpdated.price],
              "quantity" : [this.productToBeUpdated.quantity],
              "category" : this.fb.group({
                "id": [this.productToBeUpdated.category.id]
              }),
              "seller" : this.fb.group({
                "id" : [seller.id],
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
        });
        //console.log(this.updateForm.value);
      })
    })

    this.productService.GetCategory().subscribe(
      (data) => {this.Categories = data}
    )
  }

  OnFileSelected(event : any ){
    if(event.target.files && event.target.files[0]){
      var reader = new FileReader();
      reader.onload = (event : any) => {
        this.selectedFiles = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      this.toUploadFile = event.target.files[0];
    }
    else{
      this.selectedFiles = '/assets/download.png';
      this.toUploadFile = null;
    }
  }

  AddImage = () => {
    let storeName = JSON.parse(this.auth.GetSeller()).storeName
    let filepath = `images/${storeName + '_' + this.toUploadFile.name}_${new Date().getTime()}`;
    let fileRef = this.storage.ref(filepath);
    this.storage.upload(filepath, this.toUploadFile).snapshotChanges().pipe(
      finalize( () => {
        fileRef.getDownloadURL().subscribe( (url) => {
        this.response = url;
        alert('Image Uploaded!');
      })
      })
    ).subscribe()
  }

  UpdateProduct(){
    this.productService.EditProduct(this.updateForm.get("id").value,this.updateForm.value).subscribe(
      (data) => { 
        alert(data);
        this.router.navigate(["sell/dashboard"])
    })
  }

}
