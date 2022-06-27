import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.css']
})
export class VendorloginComponent implements OnInit {

  constructor(public router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  flag=true;
  empid:any
  baseUrl : string='http://localhost:3000/vendorlogin';
  Data: any;
  submit(f:NgForm){
    this.empid=f.value.empid;
   var password=f.value.password;
    console.log(this.empid);
    console.log(password);
    return this.http.post(this.baseUrl,{
     vendorid:this.empid,
     password:password
   }).subscribe(
     response =>{
       console.log(response)
       this.Data = JSON.parse(JSON.stringify(response));
       //console.log(this.Data.STATUS);
       if(this.Data.BAPIRET.TYPE === 'S'){
        localStorage.setItem('vendorid',this.empid);
         localStorage.setItem('name',this.Data.NAME)
         this.router.navigate(['/vendordashboard']);
       }
       else{
      this.flag=false;
       }
     }
   )
   
 
  }
 
}
