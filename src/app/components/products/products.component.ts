import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  
  public toUploadFile;
  public Category : any;
  public response : string;
  public ProductForm : FormGroup;
  public CategoryForm : FormGroup;
  public selectedFiles = '/assets/download.png'; 
  

  @Output() public onUploadFinished = new EventEmitter();

  constructor(private products : ProductsService,
    private fb : FormBuilder, private auth : AuthService, private storage : AngularFireStorage) 
    {

    let user = JSON.parse(this.auth.GetUser());

    this.ProductForm = this.fb.group({
      "Name" : ["", Validators.required],
      "ImageUrl" : ["", Validators.required],
      "Price" : [""],
      "Quantity" : [""],
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
    })
  }

  ngOnInit(): void {
    this.GetCategory();
  } 

  PostProduct = () => {
    
    this.ProductForm.patchValue( { ImageUrl : this.response });
    this.products.PostProduct(this.ProductForm.value).subscribe(
      data => { 
        console.log(this.ProductForm.value)
        alert(`Product Added: ${data.name}!`)
        this.ResetForm();
        window.location.href = "http://oja.netlify.app/userproducts";
      }
    )
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

  GetCategory = () => {
    this.products.GetCategory().subscribe(
      (data) => { this.Category = data }
    )
  }

  ResetForm = () => {
    this.ProductForm.reset();
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
}