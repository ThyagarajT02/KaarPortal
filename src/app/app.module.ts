import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SaleorderComponent } from './saleorder/saleorder.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { CreditComponent } from './credit/credit.component';
import { PaymentComponent } from './payment/payment.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    LoginpageComponent,
    DashboardComponent,
    UserprofileComponent,
    SaleorderComponent,
    DeliveryComponent,
    CreditComponent,
    PaymentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
