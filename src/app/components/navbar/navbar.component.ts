import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService as AuthSeller} from 'src/app/services/Sellers/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public show : boolean;
  constructor(private router : Router, private authSeller : AuthSeller) { }

  ngOnInit(): void {
    if(this.authSeller.GetSeller() == null){
      this.show = true;
    }else{
      this.show = false;
    }
  }

  Logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = "https://oja.netlify.app/"
    //https://oja.netlify.app/
    //http://localhost:4200/
  }

}
