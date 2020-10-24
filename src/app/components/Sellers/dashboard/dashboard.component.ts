import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href="https://oja.netlify.app";
    //https://oja.netlify.app/
    //http://localhost:4200/
  }
}
