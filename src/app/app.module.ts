//Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

//Routing and configuraion
import { appRoutes } from './approuting/approuting.module';
import { environment } from 'src/environments/environment';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddComponent as SalesAdd } from './components/Sales/add/add.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { ViewComponent as SalesView } from './components/Sales/view/view.component';
import { AddComponent as ProductAdd } from './components/Products/add/add.component';
import { ActivitylogComponent } from './components/activitylog/activitylog.component';
import { AddComponent as InventoryAdd } from './components/Inventory/add/add.component';
import { ViewComponent as InventoryView } from './components/Inventory/view/view.component';
import { StorekeeperComponent } from './components/Dashboard/storekeeper/storekeeper.component';
import { AdministratorComponent } from './components/Dashboard/administrator/administrator.component';
import { SuperadministratorComponent } from './components/Dashboard/superadministrator/superadministrator.component';

//Interceptor
import { HttperrorinterceptorsService } from './services/httperrorinterceptors/httperrorinterceptors.service';
import { ViewComponent } from './components/Products/view/view.component';

@NgModule({
  declarations: [ 
    AppComponent,
    SalesAdd,
    SalesView,
    ProductAdd,
    InventoryAdd,
    HomeComponent,
    InventoryView,
    LoginComponent,
    SidebarComponent,
    CreateuserComponent,
    StorekeeperComponent,
    ActivitylogComponent,
    AdministratorComponent,
    SuperadministratorComponent,
    ViewComponent
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
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttperrorinterceptorsService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
