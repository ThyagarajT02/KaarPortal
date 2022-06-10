import { Component, OnInit } from '@angular/core';
import { CustomernumberService } from '../customernumber.service';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
received:any
  constructor(private http:HttpClient,public customernumber:CustomernumberService,public router:Router) { }
  baseUrl : string='http://localhost:3000/payment';
  Data: any;
  payment:any=[]
  sample:any
  ngOnInit(): any {
    this.received=this.customernumber.getmessage();
    console.log(this.received);
    return this.http.post(this.baseUrl,{
      customerno:this.received
        }).subscribe(
          response =>{
            console.log(response)
            this.Data = JSON.parse(JSON.stringify(response));
           // console.log(this.Data);
            this.sample=this.Data.IT_DET.item
            console.log(this.sample);
            
            
            
            
          }
        )
  }

}
