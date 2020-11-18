import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm : FormGroup;
  constructor(private fb : FormBuilder) { 
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
    console.log(this.registerForm.value);
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
