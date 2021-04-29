import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;

  constructor(private fb : FormBuilder) { 
    this.loginForm = this.fb.group({
      "Name" : ["", Validators.required],
      "Password" : ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  Login(){
    
  }

  get Name(){
    return this.loginForm.get("Name");
  }

  get Password(){
    return this.loginForm.get("Password");
  }

}
