import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService as AuthSeller} from 'src/app/services/Sellers/auth/auth.service';
import { ProductsService } from 'src/app/services/Sellers/products/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public show : boolean;
  public dropdowncontent : string;
  public categories : any;

  constructor(
    private router : Router, 
    private authSeller : AuthSeller,
    private products : ProductsService) { }

  ngOnInit(): void {
    if(this.authSeller.GetSeller() == null){
      this.show = true;
    }else{
      this.show = false;
    }

    this.products.GetCategory().subscribe(
      data => { this.categories = data}
    )
  }

  Logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = "https://oja.netlify.app/"
    //https://oja.netlify.app/
    //http://localhost:4200/
  }

  showSidebar(){
    this.dropdowncontent = "display:block;"
  }

  hideSidebar(){
    this.dropdowncontent = "display:none;"
  }
}
