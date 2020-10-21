import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm : FormGroup;
  constructor(private fb : FormBuilder) { 
    this.registerForm = this.fb.group({
      "title": [""],
      "emailAddress": [""],
      "phoneNumber":[""],
      "firstName": [""],
      "lastName": [""],
      "password": [""],
      "location": [""]
    })
  }

  ngOnInit(): void {
  }

  Register = () => { 
    console.log(this.registerForm.value);
  }
}
