import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { SellComponent } from '../components/sell/sell.component';
import { SellerregisterComponent } from '../components/sellerregister/sellerregister.component';
import { SellerloginComponent } from '../components/sellerlogin/sellerlogin.component';

export const appRoutes : Routes = [
  {path:'', component:HomeComponent},
  {path:'sell', component:SellComponent},
  {path:'seller-reg', component:SellerregisterComponent},
  {path:'seller-login', component:SellerloginComponent}
]

@NgModule({
  imports: [
    RouterModule
  ],
  exports: [
    RouterModule
  ]
})
export class ApproutingModule { }
