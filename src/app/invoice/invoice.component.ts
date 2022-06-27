import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CustomernumberService } from '../customernumber.service';
import { CustinvService } from '../custinv.service';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  received: any;
  baseUrl : string='http://localhost:3000/invoice';
  Data: any;
  sample:any 
  spinner=false;
  livedate:any
  p:number=1;
  sales: any = [];
  searchKey:any
  constructor(public router:Router,public http:HttpClient,public customernumber:CustomernumberService, public inv:CustinvService) { }

  ngOnInit(): any {
    this.received=localStorage.getItem('customerno');
    console.log(this.received);
    return this.http.post(this.baseUrl,{
      customerno:this.received
        }).subscribe(
          response =>{
            this.spinner=true
            console.log(response)
            this.Data = JSON.parse(JSON.stringify(response));
           // console.log(this.Data);
            this.sample=this.Data.INV_DET.item
            console.log(this.sample);
            let k = 0;
            for (let i = 0; i < this.sample.length; i++) {
              if (this.sample[i].KOART === 'S') {
                this.sales[k++] = this.sample[i];
              }
            }
            
            
            
          }
        )
  }
  sign(){
    localStorage.clear();
    this.router.navigate(['/home'])
    
   }
bill(){
  this.router.navigate(['/customerinvoicebill'])
}
show(a:any){
  this.inv.setmessage(a);
  this.router.navigate(['/customerinvoicebill'])
  

}
key : string='SD_DOC';

reverse:boolean = false;

sort(key: string)

{

  this.key=key;

  this.reverse = !this.reverse;

}
}
