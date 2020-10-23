import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/Interfaces/Category';
import { AuthService  } from 'src/app/services/Sellers/auth/auth.service';
import { ProductsService } from 'src/app/services/Sellers/products/products.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  public productForm : FormGroup;
  public categoryForm : FormGroup;
  public sellerForm : FormGroup;
  public Categories : Array<Category>;
  public selectedFiles: any = '/assets/download.png';
  public toUploadFile: any;
  response: any;

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
        "id": [""]
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
    this.getCategory();
  }

  getCategory(){
    this.products.GetCategory().subscribe(
      data => {this.Categories = data}
    )
  }

  AddProduct(){
    console.log(this.productForm.value);
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
    console.log(this.toUploadFile);
  }

  AddImage = () => {
    let filepath = `images/${this.toUploadFile.name}_${new Date().getTime()}`;
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

}