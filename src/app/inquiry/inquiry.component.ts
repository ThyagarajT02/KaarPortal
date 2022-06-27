import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CustomernumberService } from '../customernumber.service';
@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {
received:any
baseUrl : string='http://localhost:3000/inquiry';
Data: any;
p:number=1;
  sample: any;
  search:any
  spinner=false
  constructor(public router:Router,public customernumber:CustomernumberService,public http:HttpClient) { }

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
            //console.log(this.Data);
             this.sample=this.Data.INQ_DET.item
             console.log(this.sample);
            
            
            
            
          }
        )
  }
  key : string='SD_DOC';

reverse:boolean = false;

sort(key: string)

{

  this.key=key;

  this.reverse = !this.reverse;

}
sign(){
 localStorage.clear();
  this.router.navigate(['/home'])
  
 }

}
