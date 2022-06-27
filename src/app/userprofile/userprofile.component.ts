import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';
import { SharedataService } from '../sharedata.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
profile:any
Data:any
baseUrl : string='http://localhost:3000/profile';
  constructor(private http:HttpClient,public userdata:UserdataService,public router:Router,public sharedata:SharedataService) { }
 custno:any;
 custid:any
 addr:any
 name:any
 city:any
 pcode:any
 region:any
 tel:any
 spinner=true
 spinner1=false
  ngOnInit(): any{
   
  this.custno=localStorage.getItem('customerno')
  return this.http.post(this.baseUrl,{
    customerno:this.custno
      }).subscribe(
        response =>{
          this.spinner=false
          this.spinner1=true
          console.log(response)
          this.Data = JSON.parse(JSON.stringify(response));
          this.custid=this.Data.IT_OUTPUT.KUNNR;
         
         this.addr=this. Data.IT_OUTPUT.ADRNE
        this.name=this.Data.IT_OUTPUT.NAME1
           this.city=this. Data.IT_OUTPUT.ORT01
           this. pcode=this.Data.IT_OUTPUT.PSTLZ
           this.region=this. Data.IT_OUTPUT.REGIO
           this.tel=this. Data.IT_OUTPUT.TELF1
        }
      )
   
  }
  sign(){
  localStorage.clear();
    this.router.navigate(['/home'])
    
    
   }
}
