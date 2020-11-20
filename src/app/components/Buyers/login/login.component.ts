import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm : FormGroup;
  show : boolean = true;
  showbtn : boolean = false;
  constructor(
    private fb : FormBuilder
    ) {
    this.LoginForm = this.fb.group({
      "EmailAddress":["", Validators.required],
      "Password":["",Validators.required] 
    })
   }

  ngOnInit(): void {}

  Login(){
    this.show = false;
    this.showbtn = true;
  }

  get EmailAddress(){
    return this.LoginForm.get("EmailAddress");
  }

  get Password(){
    return this.LoginForm.get("Password");
  }
  
}

