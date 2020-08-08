import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/authguard/auth.guard';
import { LoginComponent } from '../components/login/login.component';
import { ProductsComponent } from '../components/products/products.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { DisplayproductsComponent } from '../components/displayproducts/displayproducts.component';
import { UserproductsComponent } from '../components/userproducts/userproducts.component';
import { UpdateproductComponent } from '../components/updateproduct/updateproduct.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

export const appRoutes : Routes = [
  {path:'', component: DisplayproductsComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate : [ AuthGuard ],
    children : [
      {path:'products', component: ProductsComponent, canActivate : [  AuthGuard ]},
      {path:'userproducts', component: UserproductsComponent, canActivate : [  AuthGuard ]}
  ]},
  {path:'updateproduct/:id', component: UpdateproductComponent, canActivate : [  AuthGuard ]}
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
