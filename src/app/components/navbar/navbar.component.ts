import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public show : boolean;
  public categories : any;
  constructor(
    private auth : AuthService, 
    private getproducts : ProductsService,
    private router : Router) { }

  ngOnInit(): void {
    if(this.auth.GetUser()){
      this.show = true;
    }else{
      this.show = false;
    }
    this.getCategories();
  }

  getCategories = () => {
    this.getproducts.GetCategory().subscribe(
      (data) => {this.categories = data}
    )
  }

  logout = () => {
    this.auth.DeleteUser();
    this.auth.DeleteToken();
    window.location.href = "http://localhost:4200";
  }

  GetCategory = (category) => { this.router.navigate(["categories", category]) }
}
