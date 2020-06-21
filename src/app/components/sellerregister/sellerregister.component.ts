import { Component, OnInit } from '@angular/core';
import { SellersService } from 'src/app/services/sellers/sellers.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sellerregister',
  templateUrl: './sellerregister.component.html',
  styleUrls: ['./sellerregister.component.css']
})
export class SellerregisterComponent implements OnInit {

  constructor(private register : SellersService) { }

  ngOnInit(): void {
  }

  Submit(REGSELLER: NgForm){
    console.log(REGSELLER.value);

    this.register.AddSeller(REGSELLER.value).subscribe(
      seller => alert(`A new seller has been created with id : ${seller.id}`),
      err => console.log(err),
      () => alert("Created")
    )
  }
}
