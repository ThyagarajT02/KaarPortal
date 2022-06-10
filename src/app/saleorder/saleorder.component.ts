import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedataService } from '../sharedata.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CustomernumberService } from '../customernumber.service';
@Component({
  selector: 'app-saleorder',
  templateUrl: './saleorder.component.html',
  styleUrls: ['./saleorder.component.css']
})
export class SaleorderComponent implements OnInit {
message:any;
custnumber:any
  constructor(private customernumber : CustomernumberService,public router:Router,private sharedata:SharedataService,private http:HttpClient) { }
  baseUrl : string='http://localhost:3000/saleorder';
  Data: any;
  doctyp:any;
  salesdet:any
  ngOnInit():any{
   this.message= this.customernumber.getmessage()
  // this.customernumber=(this.message[1]);
   console.log(this.message);
   
   
   return this.http.post(this.baseUrl,{
    customerno:this.message
      }).subscribe(
        response =>{
          console.log(response)
          this.Data = JSON.parse(JSON.stringify(response));
          this.salesdet=(this.Data.E_SALESORDER.item);
          console.log(this.salesdet);
          
          
       
        }
      )
  }


}
