import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { appRoutes } from './approuting/approuting.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

import { SellersService } from './services/sellers/sellers.service';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SellComponent } from './components/sell/sell.component';
import { SellerregisterComponent } from './components/sellerregister/sellerregister.component';
import { SellerloginComponent } from './components/sellerlogin/sellerlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    HomeComponent,
    FooterComponent,
    SellComponent,
    SellerregisterComponent,
    SellerloginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [SellersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
