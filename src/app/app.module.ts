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
import { AuthService } from './services/auth/auth.service';
import { ProductsService } from './services/products/products.service';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { SellersComponent } from './components/sellers/sellers.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { DisplayproductsComponent } from './components/displayproducts/displayproducts.component';
import { UserproductsComponent } from './components/userproducts/userproducts.component';

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
    DisplayproductsComponent,
    UserproductsComponent
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
  providers: [AuthService, ProductsService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
