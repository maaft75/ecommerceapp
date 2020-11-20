import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/Buyers/auth/auth.service';

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
    private fb : FormBuilder,
    private auth : AuthService
    ) {
    this.LoginForm = this.fb.group({
      "EmailAddress":["", Validators.required],
      "Password":["",Validators.required] 
    })
   }

  ngOnInit(): void {}

  Login(){
    this.showbtn = true;
    this.show = false;
    this.auth.login(this.LoginForm.value).subscribe(
      (data) => {
        this.auth.saveToken(data.token);
        this.auth.saveBuyer(JSON.stringify(data));
        window.location.href = "https://oja.netlify.app";
        //http://localhost:4200/
        console.log(data);
      }
    )
  }

  get EmailAddress(){
    return this.LoginForm.get("EmailAddress");
  }

  get Password(){
    return this.LoginForm.get("Password");
  }
  
}

