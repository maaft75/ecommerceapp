import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { SellersComponent } from '../components/sellers/sellers.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { LoginComponent } from '../components/login/login.component';
import { ProductsComponent } from '../components/products/products.component';
import { DisplayproductsComponent } from '../components/displayproducts/displayproducts.component';

export const appRoutes : Routes = [
  {path:'', component:HomeComponent},
  {path:'sellers', component:SellersComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'login', component: LoginComponent},
  {path:'products', component: ProductsComponent},
  {path:'displayproducts', component: DisplayproductsComponent}
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
