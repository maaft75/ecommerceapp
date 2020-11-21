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
        localStorage.clear();
        this.auth.saveToken(data.token);
        this.auth.saveBuyer(JSON.stringify(data));
        window.location.href = "https://oja.netlify.app"; //http://localhost:4200/
        console.log(data);
      },
      (error) => {
        alert(`${Object.values(error["error"])[0]}, Please ensure you are entering the correct login credentials.`);
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

