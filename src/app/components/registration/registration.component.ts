import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

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
      "storename":["", [Validators.required]],
      "storeurl":['www.oja.com/'+"",[Validators.required]],
      "title":["",[Validators.required]],
      "firstname":["",[Validators.required]],
      "lastname":["",[Validators.required]],
      "description":["",[Validators.required]],
      "emailaddress":["",[Validators.required]],
      "password":["",[Validators.required]],
      "phonenumber":["",[Validators.required]],
      "city":["",[Validators.required]],
      "street":["",[Validators.required]],
      "state":["",[Validators.required]],
      "lga":["",[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  Register(){
    console.log(this.RegisterForm.value);
    this.auth.Register(this.RegisterForm.value).subscribe(
      data => { 
        alert(`Registration successful for ${data.id}!`);
        window.location.href = "https://oja.netlify.app/login";
       } 
    )
  }

  GetLga = (value) => {
    this.lga = this.LGA.filter(x => x.id == value);
  }

  get storename(){
    return this.RegisterForm.get("storename");
  }

  get storeurl(){
    return this.RegisterForm.get("storeurl");
  }

  get emailaddress(){
    return this.RegisterForm.get("emailaddress");
  }

}
