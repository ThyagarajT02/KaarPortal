import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditComponent } from './credit/credit.component';
import { CustinvbillComponent } from './custinvbill/custinvbill.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { GoodsreceiptComponent } from './goodsreceipt/goodsreceipt.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PaymentComponent } from './payment/payment.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { SaleorderComponent } from './saleorder/saleorder.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { VendordashboardComponent } from './vendordashboard/vendordashboard.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { VendormemoComponent } from './vendormemo/vendormemo.component';
import { VendorpaymentComponent } from './vendorpayment/vendorpayment.component';
import { VendorprofileComponent } from './vendorprofile/vendorprofile.component';

const routes: Routes = [
  {
    path:'home',
    component:LandingpageComponent
  },
  {
    path:'login',
    component:LoginpageComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'profile',
    component:UserprofileComponent
  },
  {
    path:'sale',
    component:SaleorderComponent
  },
  {
    path:'delivery',
    component:DeliveryComponent
  },
  {
    path:'credit',
    component:CreditComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {
    path:'inquiry',
    component:InquiryComponent
  },
  {
    path:'invoice',
    component:InvoiceComponent
  },
  {
    path:'vendorlogin',
    component:VendorloginComponent
  },
  {
    path:'vendordashboard',
    component:VendordashboardComponent
  },
  {
    path:'vendorprofile',
    component:VendorprofileComponent
  },
  {
    path:'purchaseorder',
    component:PurchaseorderComponent
  },
  {
    path:'goodsreceipt',
    component:GoodsreceiptComponent
  },
  {
    path:'vendormemo',
    component:VendormemoComponent
  },
  {
    path:'vendorpayment',
    component:VendorpaymentComponent
  },
  {
    path:'customerinvoicebill',
    component:CustinvbillComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
