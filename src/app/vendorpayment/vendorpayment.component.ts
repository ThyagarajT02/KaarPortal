import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-vendorpayment',
  templateUrl: './vendorpayment.component.html',
  styleUrls: ['./vendorpayment.component.css']
})
export class VendorpaymentComponent implements OnInit {

  constructor(public router:Router,private http:HttpClient) { }
vendorid:any
Data:any
  baseUrl : string='http://localhost:3000/vendorpayment';
  ngOnInit(): any {
    this.vendorid=localStorage.getItem("vendorid")
    return this.http.post(this.baseUrl,{
      vendorid:this.vendorid
        }).subscribe(
          response =>{
            console.log(response)
            this.Data = JSON.parse(JSON.stringify(response));
            
          }
        )
  }
  sign(){
    alert("Do You Want To Logout?")
    localStorage.clear();
    this.router.navigate(['/vendorlogin'])
  }
}
