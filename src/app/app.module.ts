import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { appRoutes } from './approuting/approuting.module';
import { environment } from 'src/environments/environment'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { SellersComponent } from './components/sellers/sellers.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth/auth.service';
import { ProductsService } from './services/products/products.service';

import { ProductsComponent } from './components/products/products.component';
import { DisplayproductsComponent } from './components/displayproducts/displayproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    HomeComponent,
    SellersComponent,
    RegistrationComponent,
    LoginComponent,
    ProductsComponent,
    DisplayproductsComponent
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
  providers: [AuthService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
