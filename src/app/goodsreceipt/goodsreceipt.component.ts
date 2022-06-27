import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-goodsreceipt',
  templateUrl: './goodsreceipt.component.html',
  styleUrls: ['./goodsreceipt.component.css']
})
export class GoodsreceiptComponent implements OnInit {

  constructor(public router:Router,private http:HttpClient) { }
  vendorid:any
  Data:any
  baseUrl : string='http://localhost:3000/goodsreceipt';
  ngOnInit(): any {
    this.vendorid=localStorage.getItem('vendorid')
    return this.http.post(this.baseUrl,{
      vendorid:this.vendorid
        }).subscribe(
          response =>{
            console.log(response)
            this.Data = JSON.parse(JSON.stringify(response));
          //   this.custid=this.Data.IT_OUTPUT.KUNNR;
          //console.log(this.Data);
          
           
          }
        )
  }
  sign(){
    alert("Do You Want To Logout?")
    localStorage.clear();
    this.router.navigate(['/vendorlogin'])
  }
}
