import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vendordashboard',
  templateUrl: './vendordashboard.component.html',
  styleUrls: ['./vendordashboard.component.css']
})
export class VendordashboardComponent implements OnInit {
uname:any
  constructor(public router:Router) { }

  ngOnInit(): void {
    this. uname=localStorage.getItem("name")
  }
  profile(){
    this.router.navigate(['/vendorprofile']);
  }
  sign(){
    alert("Do You Want To Logout?")
    localStorage.clear();
    this.router.navigate(['/vendorlogin'])
  }
  po(){
    this.router.navigate(['/purchaseorder'])
  }
  gr(){
    this.router.navigate(['/goodsreceipt'])
  }
 memo(){
  this.router.navigate(['/vendormemo'])
 }
 pay(){
  this.router.navigate(['/vendorpayment'])
 }
}
