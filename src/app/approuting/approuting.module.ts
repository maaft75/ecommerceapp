import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/authguard/auth.guard';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { SellersComponent } from '../components/sellers/sellers.component';
import { ProductsComponent } from '../components/products/products.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { DisplayproductsComponent } from '../components/displayproducts/displayproducts.component';
import { UserproductsComponent } from '../components/userproducts/userproducts.component';

export const appRoutes : Routes = [
  {path:'', component: DisplayproductsComponent},
  {path:'sellers', component:SellersComponent},
  {path:'sellers/registration', component:RegistrationComponent},
  {path:'sellers/login', component: LoginComponent},
  {path:'products', component: ProductsComponent, canActivate : [  AuthGuard ]},
  {path:'userproducts', component: UserproductsComponent}
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
