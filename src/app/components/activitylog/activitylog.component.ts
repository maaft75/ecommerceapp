import { Component, Input, OnInit } from '@angular/core';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-activitylog',
  templateUrl: './activitylog.component.html',
  styleUrls: ['./activitylog.component.css']
})
export class ActivitylogComponent implements OnInit {

  public soldProducts : any = [];
  public reversedSoldProducts : any = [];

  constructor(private salesService : SalesService) { }

  ngOnInit(): void {
    this.salesService.getSoldProductsByUser(this.userId).subscribe((data) => {
      this.soldProducts = data;
      this.soldProducts.reverse();
    })
  }

  @Input() userId : Number;

}
