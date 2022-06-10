import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditComponent } from './credit/credit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PaymentComponent } from './payment/payment.component';
import { SaleorderComponent } from './saleorder/saleorder.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
