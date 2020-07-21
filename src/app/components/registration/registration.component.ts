import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  RegisterForm : FormGroup;
  constructor(private fb : FormBuilder, private auth : AuthService) {
    this.RegisterForm = this.fb.group({
      "storename":["", [Validators.required]],
      "storeurl":['www.ecommerce.com/'+"",[Validators.required]],
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
    this.auth.Register(this.RegisterForm.value).subscribe(data =>
      {
        alert(`Registration successful for ${data.id}!`);
        window.location.href = "http://localhost:4200/login";
      }
    )
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
