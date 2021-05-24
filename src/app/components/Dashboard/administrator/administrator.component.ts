import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  sidebar : string = "display:none";

  constructor() { }

  ngOnInit(): void {
  }

  showSideBar(){
    this.sidebar = "display:block";
  }

  hideSideBar(){
    this.sidebar = "display:none";
  }

}
