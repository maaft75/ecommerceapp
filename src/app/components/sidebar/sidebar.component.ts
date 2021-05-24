import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public admin : boolean;
  public superadmin : boolean;
  public storekeeper : boolean;

  sidebar : string = "display:none";

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    if(this.authService.getRoleFromLocalStorage() == "Store Keeper"){
      this.storekeeper = true;
    }
    else if(this.authService.getRoleFromLocalStorage() == "Administrator"){
      this.admin = true;
    }
    else if(this.authService.getRoleFromLocalStorage() == "Super Administrator"){
      this.superadmin = true;
    }
  }

  showSideBar(){
    this.sidebar = "display:block";
  }

  hideSideBar(){
    this.sidebar = "display:none";
  }

  Logout(){
    this.authService.clearLocalStorage();
    window.location.href = environment.frontendUrl + "login";
  }
}
