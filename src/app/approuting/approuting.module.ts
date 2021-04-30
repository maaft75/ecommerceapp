import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { AdminguardGuard } from '../guards/adminguard/adminguard.guard';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { CreateuserComponent } from '../components/createuser/createuser.component';

export const appRoutes : Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'createuser', component: CreateuserComponent, canActivate : [AdminguardGuard]},
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
