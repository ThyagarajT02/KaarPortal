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
import {  Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { InquiryComponent } from './inquiry/inquiry.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { VendordashboardComponent } from './vendordashboard/vendordashboard.component';
import { VendorprofileComponent } from './vendorprofile/vendorprofile.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { GoodsreceiptComponent } from './goodsreceipt/goodsreceipt.component';
import { VendormemoComponent } from './vendormemo/vendormemo.component';
import { VendorpaymentComponent } from './vendorpayment/vendorpayment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustinvbillComponent } from './custinvbill/custinvbill.component';
import { NgxPaginationModule } from 'ngx-pagination';
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
    InquiryComponent,
    InvoiceComponent,
    VendorloginComponent,
    VendordashboardComponent,
    VendorprofileComponent,
    PurchaseorderComponent,
    GoodsreceiptComponent,
    VendormemoComponent,
    VendorpaymentComponent,
    CustinvbillComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,Ng2SearchPipeModule,Ng2OrderModule, BrowserAnimationsModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
