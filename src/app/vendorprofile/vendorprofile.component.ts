import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vendorprofile',
  templateUrl: './vendorprofile.component.html',
  styleUrls: ['./vendorprofile.component.css']
})
export class VendorprofileComponent implements OnInit {

  constructor(public router:Router,private http:HttpClient) { }
vendorid:any
name:any
addr:any
city:any
country:any
pcode:any
phno:any
Data:any

baseUrl : string='http://localhost:3000/vendorprofile';
  ngOnInit(): any {
   
    this.name=localStorage.getItem("vendorid")
    this.vendorid=localStorage.getItem('vendorid')
    console.log(this.vendorid);
    
  return this.http.post(this.baseUrl,{
    vendorid:this.vendorid
      }).subscribe(
        response =>{
          console.log(response)
          this.Data = JSON.parse(JSON.stringify(response));
        //   this.custid=this.Data.IT_OUTPUT.KUNNR;
         
          this.addr=this. Data.VEND_PROFILE.ADDRESS
        // this.name=this.Data.IT_OUTPUT.NAME1
           this.city=this. Data.VEND_PROFILE.CITY
            this. pcode=this.Data.VEND_PROFILE.PINCODE
            this.country=this. Data.VEND_PROFILE.COUNTRY
           this.phno=this. Data.VEND_PROFILE.TELEPHONE
        }
      )
   
  }
  sign(){
    alert("Do You Want To Logout?")
    localStorage.clear();
    this.router.navigate(['/vendorlogin'])
  }

}
