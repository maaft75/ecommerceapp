import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/authguard/auth.guard';

import { HomepageComponent as BuyersHomePage } from '../components/Buyers/homepage/homepage.component' ;
import { HomepageComponent as SellersHomePage } from '../components/Sellers/homepage/homepage.component';
import { LoginComponent as BuyersLogin } from '../components/Buyers/login/login.component';
import { LoginComponent as SellersLogin } from '../components/Sellers/login/login.component';
import { DashboardComponent as SellersDashboard } from '../components/Sellers/dashboard/dashboard.component';
import { RegistrationComponent as BuyersRegister} from '../components/Buyers/registration/registration.component';
import { RegistrationComponent as SellersRegister } from '../components/Sellers/registration/registration.component';
import { AddproductComponent } from '../components/sellers/addproduct/addproduct.component';

export const appRoutes : Routes = [
  {path:'', component: BuyersHomePage},
  {path:'login', component: BuyersLogin},
  {path:'register', component: BuyersRegister},
  {path:'seller', component: SellersHomePage},
  {path:'sell/register', component: SellersRegister},
  {path:'sell/login', component: SellersLogin},
  {path:'sell/dashboard', component:SellersDashboard, canActivate : [AuthGuard] },
  {path:'addproduct', component:AddproductComponent, canActivate : [AuthGuard] }
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
