import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedataService } from '../sharedata.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UserdataService } from '../userdata.service';
import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { CustomernumberService } from '../customernumber.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  received:any
  name:any;
  custno:any
  baseUrl : string='http://localhost:3000/profile';
  Data: any;
  constructor(private customernumber:CustomernumberService ,private userdata:UserdataService,public router: Router,private sharedata:SharedataService,private http:HttpClient) { }

  ngOnInit(): void {
    this.received=this.sharedata.getMessage();
    console.log(this.received);
   // this.cus=this.sharedata.getMessage
   this.name=this.received[0];
    
  }

  
  sale(){
    this.customernumber.setmessage(this.received[1]);
    console.log("data sent");
    this.router.navigate(['/sale'])
  }

 sign(){
  this.router.navigate(['/login']);
  
 }
 delivery(){
  this.customernumber.setmessage(this.received[1]);
  console.log("data sent");
  
  this.router.navigate(['/delivery']);
  
 }
 credit(){
  this.customernumber.setmessage(this.received[1]);
  console.log("data sent");
  
  this.router.navigate(['/credit']);
 }
 pay(){
  this.customernumber.setmessage(this.received[1]);
  console.log("data sent");
  
  this.router.navigate(['/payment']);
 }
 free(){

 this.custno=this.received[1];
    console.log(this.custno);
    this.router.navigate(['/profile']);

    
  
   
   
 }

}

