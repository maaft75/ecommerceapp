import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Sellers/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm : FormGroup;
  constructor(private fb : FormBuilder, private auth : AuthService, private router : Router) {
    this.LoginForm = this.fb.group({
      "EmailAddress":[""],
      "Password":[""] 
    })
   }

  ngOnInit(): void {}

  Login = () => {
    this.auth.Login(this.LoginForm.value).subscribe(
      data => {
        this.auth.SaveSeller(data);
        this.auth.SaveToken(data.token);
        window.location.href = "http://localhost:4200/sell/dashboard";
        //https://oja.netlify.app/
        //http://localhost:4200/
      })
  }
}
