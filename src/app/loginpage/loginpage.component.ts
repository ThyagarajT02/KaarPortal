import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { SharedataService } from '../sharedata.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  constructor(public sharedata:SharedataService,public router: Router,private http:HttpClient) { }
  empid:any
  ngOnInit(): void {
    
  }
  ngOnDestroy():void{
    this.sharedata.setMessage(this.Data.NAME,this.empid)
  }
  flag=true;
  baseUrl : string='http://localhost:3000/login';
  Data: any;
  submit(f:NgForm){
     this.empid=f.value.empid;
    var password=f.value.password;
     console.log(this.empid);
     console.log(password);
     return this.http.post(this.baseUrl,{
      username:this.empid,
      password:password
    }).subscribe(
      response =>{
        console.log(response)
        this.Data = JSON.parse(JSON.stringify(response));
        console.log(this.Data.STATUS);
        if(this.Data.STATUS === 'S'){
        localStorage.setItem('customerno',this.empid);
         localStorage.setItem('name',this.Data.NAME)
          this.router.navigate(['/dashboard']);
        }
        else{
       this.flag=false;
        }
      }
    )
    
  
   }
  
   
    
      }

