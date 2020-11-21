import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService as AuthBuyer } from 'src/app/services/Buyers/auth/auth.service';
import { AuthService as AuthSeller} from 'src/app/services/Sellers/auth/auth.service';
import { ProductsService } from 'src/app/services/Sellers/products/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public show : boolean;
  public categories : any;
  public dropdowncontent : string;
  public isBuyerLoggedIn : boolean;
  public isSellerLoggedIn : boolean;
  public showDropdownBtn : boolean = false;

  constructor( 
    private authSeller : AuthSeller,
    private authBuyer : AuthBuyer,
    private products : ProductsService) { }

  ngOnInit(): void {
    this.products.GetCategory().subscribe(
      data => { this.categories = data}
    )

    this.checkIfBuyerIsLoggedIn();
    this.checkIfSellerIsLoggedIn();
    this.checkIfAnyLoggedIn();
  }

  Logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('buyer');
    window.location.href = "https://oja.netlify.app/";
    //http://localhost:4200/
  }

  checkIfBuyerIsLoggedIn(){
    let buyer = this.authBuyer.getBuyer();
    if(buyer != null){
      this.isBuyerLoggedIn = true;
    }else{
      this.isBuyerLoggedIn = false;
    }
  }

  checkIfSellerIsLoggedIn(){
    let seller = this.authSeller.GetSeller();
    if(seller != null){
      this.isSellerLoggedIn = true;
    }else{
      this.isSellerLoggedIn = false;
    }
  }

  checkIfAnyLoggedIn(){
    let seller = this.authSeller.GetSeller();
    let buyer = this.authBuyer.getBuyer();
    if(seller != null || buyer != null){
      this.show = true;
    }else{
      this.show = false;
    }
  }

  toggleSidebar(){
    this.showDropdownBtn = !this.showDropdownBtn;
  }

}
