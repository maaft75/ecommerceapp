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
import { AddproductComponent } from '../components/Products/addproduct/addproduct.component'; 
import { CategoryComponent } from '../components/CategoryFolder/category/category.component';
import { CategoryplaceholderComponent } from '../components/CategoryFolder/categoryplaceholder/categoryplaceholder.component';
import { CategoriesComponent } from '../components/CategoryFolder/categories/categories.component';
import { SearchComponent } from '../components/search/search/search.component';
import { SearchPlaceholderComponent } from '../components/search/search-placeholder/search-placeholder.component';
import { SearchResultComponent } from '../components/search/search-result/search-result.component';
import { ProductComponent } from '../components/Products/product/product.component';
import { ProductdetailComponent } from '../components/Products/productdetail/productdetail.component';
import { UpdateComponent } from '../components/Products/update/update.component';
import { UpdateproductComponent } from '../components/Products/updateproduct/updateproduct.component';

export const appRoutes : Routes = [
  {path:'home', component: BuyersHomePage},
  {path:'login', component: BuyersLogin},
  {path:'register', component: BuyersRegister},
  {path:'sell', component: SellersHomePage},
  {path:'sell/register', component: SellersRegister},
  {path:'sell/login', component: SellersLogin},
  {path:'categories', component: CategoriesComponent, children:[
    {path:':category', component : CategoryComponent},
    {path:'', component: CategoryplaceholderComponent}
  ]},
  {path:'sell/dashboard', component:SellersDashboard, canActivate : [AuthGuard] },
  {path:'addproduct', component:AddproductComponent, canActivate : [AuthGuard] },
  {path: 'search', component:SearchComponent, children:[
    {path:':productName', component:SearchResultComponent},
    {path:'',component:SearchPlaceholderComponent}
  ]},
  {path:'product', component: ProductComponent, children:[
    {path:':id', component:ProductdetailComponent}
  ]},
  {path:'update/product', component: UpdateComponent, canActivate : [AuthGuard], children:[
    {path:':id', component:UpdateproductComponent}
  ]},
  {path:'**', redirectTo:'/home', pathMatch:'full'}
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
