import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-vendormemo',
  templateUrl: './vendormemo.component.html',
  styleUrls: ['./vendormemo.component.css']
})
export class VendormemoComponent implements OnInit {

  constructor(public router:Router,private http:HttpClient) { }
  Data:any
  baseUrl : string='http://localhost:3000/vendormemo';
  credit_array:any=[]
debit_array:any=[]
credit:any
debit:any
search:any
searchKey:any
  vendorid:any
  ngOnInit(): any {
    this.vendorid=localStorage.getItem("vendorid")
    return this.http.post(this.baseUrl,{
     
      vendorid:this.vendorid
        }).subscribe(
          response =>{
            console.log(response)
            this.Data = JSON.parse(JSON.stringify(response));
            this.credit=(this.Data.T_CRE.item);
            this.debit=(this.Data.T_DEB.item);

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
  sign(){
    alert("Do You Want To Logout?")
    localStorage.clear();
    this.router.navigate(['/vendorlogin'])
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
}
