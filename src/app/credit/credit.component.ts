import { Component, OnInit } from '@angular/core';
import { CustomernumberService } from '../customernumber.service';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
received:any
searchKey:any
p:number=1;
p1:number=1;
spinner=false
search:any
credit:any
debit:any
credit_array:any=[]
debit_array:any=[]
  constructor(private http:HttpClient,public customernumber:CustomernumberService,public router:Router) { }
  baseUrl : string='http://localhost:3000/credit';
  Data: any;
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
            this.credit=(this.Data.IT_CRE.item);
            this.debit=(this.Data.IT_DEB.item);

            for(let i=1;i<this.credit.length;i++){
              this.credit_array[i-1]=this.credit[i]
            }
            for(let i=1;i<this.debit.length;i++){
              this.debit_array[i-1]=this.debit[i]
            }
            console.log(this.credit_array);
            console.log(this.debit_array);
            
            
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
key1:string='';
reverse1:boolean=false;
sort1(key1: string)

{

  this.key1=key1;

  this.reverse1 = !this.reverse1;

}
sign(){
  localStorage.removeItem('customerno');
  this.router.navigate(['/home'])
  
 }
}
