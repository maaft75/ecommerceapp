import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/Sellers/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  public states = [
    { id : 1, name : "Lagos" },
    { id : 2, name : "Ogun" },
    { id : 3, name : "Oyo" },
    { id : 4, name : "Osun" },
    { id : 5, name : "Ondo" }
  ];

  public LGA = [
    { id : "Lagos", name : "Ikeja" },
    { id : "Lagos", name : "Lekki" },
    { id : "Lagos", name : "Ikorodu" },
    { id : "Lagos", name : "Yaba" },
    { id : "Lagos", name : "Surulere" },
    { id : "Ogun", name : "Ijebu" },
    { id : "Ogun", name : "Abeokuta" },
    { id : "Ogun", name : "Sagamu" },
    { id : "Oyo", name : "Ibadan" },
    { id : "Oyo", name : "Oyo" },
    { id : "Osun", name : "Ilesha" },
    { id : "Osun", name : "Oshogbo" },
    { id : "Ondo", name : "Akure" },
    { id : "Ondo", name : "Owo" },
    { id : "Ondo", name : "Ondo" }
  ]
 ;

  public lga;

  RegisterForm : FormGroup;
  constructor(private fb : FormBuilder, private auth : AuthService) {
    this.RegisterForm = this.fb.group({
      "storeName":["", [Validators.required]],
      "storeUrl":['www.oja.netlify.app/'+"",[Validators.required]],
      "title":["",[Validators.required]],
      "firstName":["",[Validators.required]],
      "lastName":["",[Validators.required]],
      "description":["",[Validators.required]],
      "emailAddress":["",[Validators.required]],
      "password":["",[Validators.required]],
      "phoneNumber":["",[Validators.required]],
      "city":["",[Validators.required]],
      "street":["",[Validators.required]],
      "state":["",[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  Register(){
    this.auth.Register(this.RegisterForm.value).subscribe(
      data => {
        alert(`Registration successful!`);
        window.location.href = "https://oja.netlify.app/sell/login";
        //http://localhost:4200/login
      },
      (error) => {
          alert(`${Object.values(error["error"])[0]}`);
          if(error){
            window.location.href = "https://oja.netlify.app/register"
          }
      })
  }

  GetLga = (value) => {
    this.lga = this.LGA.filter(x => x.id == value);
  }

  get storeName(){
    return this.RegisterForm.get("storeName");
  }

  get storeUrl(){
    return this.RegisterForm.get("storeUrl");
  }

  get title(){
    return this.RegisterForm.get("title");
  }

  get firstName(){
    return this.RegisterForm.get("firstName");
  }

  get lastName(){
    return this.RegisterForm.get("lastName");
  }

  get description(){
    return this.RegisterForm.get("description");
  }

  get emailAddress(){
    return this.RegisterForm.get("emailAddress");
  }

  get password(){
    return this.RegisterForm.get("password");
  }

  get phoneNumber(){
    return this.RegisterForm.get("phoneNumber");
  }

  get city(){
    return this.RegisterForm.get("city");
  }

  get street(){
    return this.RegisterForm.get("street");
  }

  get state(){
    return this.RegisterForm.get("state");
  }
}

