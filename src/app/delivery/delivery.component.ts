import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomernumberService } from '../customernumber.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  received:any
  array:any=[]
  message:any;
  custnumber:any
  baseUrl : string='http://localhost:3000/delivery';
  Data: any;
  constructor(private http:HttpClient,public router:Router, private customernumber:CustomernumberService) { }

  ngOnInit(): any {
  this.received=  this.customernumber.getmessage()
  console.log(this.received);
  return this.http.post(this.baseUrl,{
    customerno:this.received
      }).subscribe(
        response =>{
          console.log(response)
          this.Data = JSON.parse(JSON.stringify(response));
          
          this.message=(this.Data.IT_DELIVERY.item);
          console.log(this.message);
          for(let i=1;i<this.message.length;i++){
            this.array[i-1]=this.message[i]
          }
          console.log(this.array);
          
          
          
          
       
        }
      )
  }

}
