import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public show : boolean;
  constructor(private auth : AuthService) { }

  ngOnInit(): void {
    if(this.auth.GetUser()){
      this.show = false;
    }else{
      this.show = true;
    }
  }

  logout = () => {
    this.auth.DeleteUser();
    this.auth.DeleteToken();
    window.location.href = "http://localhost:4200";
  }
}
