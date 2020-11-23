import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Sellers/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  LoginForm : FormGroup;
  show : boolean = true;
  showbtn : boolean = false;

  constructor(private fb : FormBuilder, private auth : AuthService, private router : Router) {
    this.LoginForm = this.fb.group({
      "EmailAddress":["",Validators.required],
      "Password":["",Validators.required] 
    })
   }

  ngOnInit(): void {}

  Login = () => {
    this.showbtn = true;
    this.show = false;
    this.auth.Login(this.LoginForm.value).subscribe(
      data => {
        localStorage.clear();
        this.auth.SaveSeller(data);
        this.auth.SaveToken(data.token);
        window.location.href = "https://oja.netlify.app/sell/dashboard";
        //https://oja.netlify.app/
        //http://localhost:4200/
      },
      (error) => {
        alert(`${error["error"]["error"]}, Please ensure you are entering the correct login credentials.`);
        if(error){ window.location.href = "https://oja.netlify.app/login" }
    })
  }

  get EmailAddress(){
    return this.LoginForm.get("EmailAddress");
  }

  get Password(){
    return this.LoginForm.get("Password");
  }
}
