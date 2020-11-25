import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/Interfaces/Product';
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
  searchForm : FormGroup;
  public categories : any;
  public searchInput : any;
  public product : Array<Product>;
  public searchResult : Array<Product>;
  public dropdowncontent : string;
  public isBuyerLoggedIn : boolean;
  public isSellerLoggedIn : boolean;
  public showDropdownBtn : boolean = false;

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private authBuyer : AuthBuyer,
    private authSeller : AuthSeller,
    private products : ProductsService) { 
      this.searchForm = this.fb.group({
        "searchInput" : [""]
      })
    }

  ngOnInit(): void {
    this.checkIfBuyerIsLoggedIn();
    this.checkIfSellerIsLoggedIn();
    this.checkIfAnyLoggedIn();
    this.products.GetCategory().subscribe(
      data => { this.categories = data}
    );
  }

  search(){
    this.searchInput = Object.values(this.searchForm.value)[0];
    this.products.GetProducts().subscribe(
      (data) => { 
        this.product = data;
        window.location.href = `https://oja.netlify.app/search/${this.searchInput}`
        //this.router.navigate(["search/" + this.searchInput]);
        //this.searchForm.reset();
    })
  }

  Logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('buyer');
    window.location.href = "https://oja.netlify.app/";//http://localhost:4200/
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
