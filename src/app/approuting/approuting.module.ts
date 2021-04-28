import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';

export const appRoutes : Routes = [
  {path:'login', component: LoginComponent}
  //{path:'**', redirectTo:'/home', pathMatch:'full'}
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
