import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  Logout(){
    this.auth.DeleteToken();
    this.auth.DeleteUser();
    window.location.href = "https://oja.netlify.app/4200";
  }

}
