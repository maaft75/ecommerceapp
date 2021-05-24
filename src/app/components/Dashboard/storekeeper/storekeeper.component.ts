import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-storekeeper',
  templateUrl: './storekeeper.component.html',
  styleUrls: ['./storekeeper.component.css']
})
export class StorekeeperComponent implements OnInit {

  userId : Number;
  sidebar : string = "display:none";

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.userId = Number(this.authService.getId());
  }
  
  showSideBar(){
    this.sidebar = "display:block";
  }

  hideSideBar(){
    this.sidebar = "display:none";
  }

}
