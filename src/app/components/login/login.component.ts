import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm : FormGroup;
  constructor(private fb : FormBuilder, private auth : AuthService) {
    this.LoginForm = this.fb.group({
      "EmailAddress":[""],
      "Password":[""] 
    })
   }

  ngOnInit(): void {}

  Login(){
    this.auth.Login(this.LoginForm.value).subscribe(
      data => {
        this.auth.SaveUser(data)
        this.auth.SaveToken(data.token)
        window.location.href = "https://oja.netlify.app/dashboard/userproducts";
      }
    );
  }
}
