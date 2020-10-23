import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public menProducts : any;
  public womenProducts : any;
  public categories : any;
  public itProducts : any;

  constructor(
    private router : Router) 
    { }

  ngOnInit(): void {
  }

  /*GetMenProducts(){
    this.getproducts.GetProduct().subscribe(
      (data) => { this.menProducts = data.filter( x => x.category.name == "Men's Fashion" ).reverse().slice(0,4) } 
    )
  } */
}
