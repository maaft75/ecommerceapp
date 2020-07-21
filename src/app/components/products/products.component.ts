import { HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  public selectedFiles = '/assets/download.png';
  public message : string;
  public progress : number;
  public ProductForm : FormGroup;
  public response : string;

  @Output() public onUploadFinished = new EventEmitter();

  constructor(private products : ProductsService,
    private fb : FormBuilder, private auth : AuthService, private storage : AngularFireStorage) 
    {

    let user = JSON.parse(this.auth.GetUser());

    this.ProductForm = this.fb.group({
      "Description" : ["", Validators.required],
      "ImageUrl" : ["", Validators.required],
      "Price" : [""],
      "Quantity" : [""],
      "Sellerdetails" : this.fb.group({
        "id" : [user.id],
        "title" : [user.title],
        "firstname" : [user.firstname],
        "lastname" : [user.lastname],
        "emailaddress" : [user.emailaddress],
        "password" : [user.password],
        "storename" : [user.storename],
        "storeurl" : [user.storeurl],
        "description" : [user.description],
        "state" : [user.state],
        "lga" : [user.lga],
        "city" : [user.city],
        "phonenumber" : [user.phonenumber],
        "street" : [user.street]
      }),
      "Categories" : this.fb.group({
        "id" : "1"
      })
    })
  }

  ngOnInit(): void {} 

  PostProduct = () => {
    this.ProductForm.patchValue( { ImageUrl : this.response });
    this.products.PostProduct(this.ProductForm.value).subscribe(
      data => { 
        console.log(this.ProductForm.value)
        alert(`Product Added: ${data.description}!`);
        this.ResetForm();
        window.location.href = "http://localhost:4200/displayproducts";
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

  ResetForm = () => {
    this.ProductForm.reset();
  }

  OnFileSelected(event : any ){
    if(event.target.files && event.target.files[0]){
      var reader = new FileReader();
      reader.onload = (ev : any) => {
        this.selectedFiles = ev.target.result;
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

  //Used to handle image upload on locahost
  /* OnUpload(){
    const fd = new FormData();
    fd.append('image', this.toUploadFile, this.toUploadFile.name)

    this.products.UploadImage(fd).subscribe(event => {
      if(event.type === HttpEventType.UploadProgress){
        this.progress = Math.round(event.loaded / event.total * 100)
      }else if(event.type === HttpEventType.Response){
        this.message = "Successful!"
        this.response = event.body;
        console.log(this.response);
      }
    })
  } */
}