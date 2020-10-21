import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm : FormGroup;
  constructor(private fb : FormBuilder) {
    this.LoginForm = this.fb.group({
      "EmailAddress":[""],
      "Password":[""] 
    })
   }

  ngOnInit(): void {}

  Login(){
    
  }
}

