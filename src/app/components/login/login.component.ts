import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;
  public loginButton : boolean = true;

  constructor(private fb : FormBuilder, private authService : AuthService) { 
    this.loginForm = this.fb.group({
      "Name" : ["", Validators.required],
      "Password" : ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  Login(){
    this.loginButton = false;
    this.authService.login(this.loginForm.value).subscribe((response) =>
    {
      this.authService.saveId(response.id);
      this.authService.saveRole(response.role);
      this.authService.saveToken(response.token);
      this.authService.saveLocation(response.location);

      if(response.role == "Store Keeper")
      {
        window.location.href = environment.frontendUrl + "dashboard";
      }
      else if(response.role == "Administrator")
      {
        window.location.href = environment.frontendUrl + "admin/dashboard";
      }
      else if(response.role == "Super Administrator")
      {
        window.location.href = environment.frontendUrl + "sadmin/dashboard";
      }

    },
    (error) => {
       alert(error["error"]["error"]);
       location.reload();
    })
  }

  get Name(){
    return this.loginForm.get("Name");
  }

  get Password(){
    return this.loginForm.get("Password");
  }

}
