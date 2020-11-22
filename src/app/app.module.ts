//Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/storage';

//Routing and configuraion
import { appRoutes } from './approuting/approuting.module';
import { environment } from 'src/environments/environment'

//Guards
import { AuthGuard } from './guards/authguard/auth.guard';

//Services

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HomepageComponent } from './components/Buyers/homepage/homepage.component';
import { LoginComponent } from './components/Buyers/login/login.component';
import { RegistrationComponent } from './components/Buyers/registration/registration.component';

import { LoginComponent as SellersLogin} from './components/Sellers/login/login.component';
import { RegistrationComponent as SellersRegister } from './components/Sellers/registration/registration.component';
import { DashboardComponent as SellersDashboard } from './components/Sellers/dashboard/dashboard.component';
import { AddproductComponent } from './components/Sellers/addproduct/addproduct.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryplaceholderComponent } from './components/categoryplaceholder/categoryplaceholder.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SellersRegister,
    SellersLogin,
    HomepageComponent,
    RegistrationComponent,
    SellersDashboard,
    AddproductComponent,
    CategoryComponent,
    CategoriesComponent,
    CategoryplaceholderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp( environment.firebaseConfig ),
    AngularFireStorageModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
