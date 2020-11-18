import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm : FormGroup;
  constructor(private fb : FormBuilder) {
    this.LoginForm = this.fb.group({
      "EmailAddress":["", Validators.required],
      "Password":["",Validators.required] 
    })
   }

  ngOnInit(): void {}

  Login(){
    
  }

  get EmailAddress(){
    return this.LoginForm.get("EmailAddress");
  }

  get Password(){
    return this.LoginForm.get("Password");
  }
  
}

