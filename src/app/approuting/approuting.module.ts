import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { AdminguardGuard } from '../guards/adminguard/adminguard.guard';
import { AddComponent as SalesAdd } from '../components/Sales/add/add.component';
import { CreateuserComponent } from '../components/createuser/createuser.component';
import { ViewComponent as SalesView } from '../components/Sales/view/view.component';
import { AddComponent as ProductAdd } from '../components/Products/add/add.component';
import { SuperadminguardGuard } from '../guards/superadminguard/superadminguard.guard';
import { AddComponent as InventoryAdd } from '../components/Inventory/add/add.component';
import { ViewComponent as ProductView } from '../components/Products/view/view.component';
import { StorekeeperguardGuard } from '../guards/storekeeperguard/storekeeperguard.guard';
import { ViewComponent as InventoryView } from '../components/Inventory/view/view.component';
import { StorekeeperComponent } from '../components/Dashboard/storekeeper/storekeeper.component';
import { AdministratorComponent } from '../components/Dashboard/administrator/administrator.component';
import { SuperadministratorComponent } from '../components/Dashboard/superadministrator/superadministrator.component';

export const appRoutes : Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'product/add', component: ProductAdd, canActivate : [SuperadminguardGuard]},
  {path:'sales/add', component: SalesAdd, canActivate : [StorekeeperguardGuard]},
  {path:'sales/view', component: SalesView, canActivate : [SuperadminguardGuard]},
  {path:'inventory/add', component: InventoryAdd, canActivate : [SuperadminguardGuard]},
  {path:'createuser', component: CreateuserComponent, canActivate : [SuperadminguardGuard]},
  {path:'inventory/view', component: InventoryView, canActivate : [SuperadminguardGuard]},
  {path:'dashboard', component: StorekeeperComponent, canActivate : [StorekeeperguardGuard]},
  {path:'admin/dashboard', component: AdministratorComponent, canActivate : [AdminguardGuard]},
  {path:'products/view', component: ProductView, canActivate : [SuperadminguardGuard]},
  {path:'sadmin/dashboard', component: SuperadministratorComponent, canActivate : [SuperadminguardGuard]},
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
