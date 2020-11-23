import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Buyers/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registerForm : FormGroup;

  constructor(
    private fb : FormBuilder,
    private auth : AuthService,
    private router : Router) { 
    this.registerForm = this.fb.group({
      "title": ["",Validators.required],
      "emailAddress": ["",Validators.required],
      "phoneNumber":["",Validators.required],
      "firstName": ["",Validators.required],
      "lastName": ["",Validators.required],
      "password": ["",Validators.required],
      "location": ["",Validators.required]
    })
  }

  ngOnInit(): void {
  }

  Register = () => {
    this.auth.register(this.registerForm.value).subscribe(
      (data) => 
      { 
        alert(`Welcome to Oja, ${data.firstName}!`);
        window.location.href = "https://oja.netlify.app/login"
      },
      (error) => {
          alert(`${Object.values(error["error"])[0]}`);
          if(error){
            window.location.href = "https://oja.netlify.app/register"
          }
      })
    }

  get title(){
    return this.registerForm.get("title");
  }

  get emailAddress(){
    return this.registerForm.get("emailAddress");
  }

  get phoneNumber(){
    return this.registerForm.get("phoneNumber");
  }

  get firstName(){
    return this.registerForm.get("firstName");
  }

  get lastName(){
    return this.registerForm.get("lastName");
  }

  get password(){
    return this.registerForm.get("password");
  }

  get location(){
    return this.registerForm.get("location");
  }
}
