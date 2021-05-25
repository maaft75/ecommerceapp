import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  public roles : any;
  public locations : any;
  public createUserForm : FormGroup;

  constructor(private fb : FormBuilder, private authService : AuthService) {
    this.createUserForm = this.fb.group({
      "Name": ["", Validators.required],
      "Role": ["", Validators.required],
      "Location": ["", Validators.required],
      "Password": ["", Validators.required]
    })
  }

  ngOnInit(): void {
    this.authService.getLocations().subscribe(data => {this.locations = data});
    this.authService.getRoles().subscribe(data => {this.roles = data});
   }

  CreateUser(){ 
    this.authService.createUser(this.createUserForm.value).subscribe((response) => {
      alert(`User Created
            Role : ${response.role} 
            Name : ${response.name}
            Password : ${this.createUserForm.get("Password").value}
            Location : ${response.location}.`);
    },
    (error) => {
       alert(error["error"]["error"]);
    })
   }

  get Name(){
    return this.createUserForm.get("Name");
  }

  get Role(){
    return this.createUserForm.get("Role");
  }

  get Password(){
    return this.createUserForm.get("Password");
  }

  get Location(){
    return this.createUserForm.get("Location");
  }
}
