import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.component.html',
  styleUrls: ['./purchaseorder.component.css']
})
export class PurchaseorderComponent implements OnInit ,AfterViewInit{
@ViewChild('valu') a1:any;
  constructor(public router:Router,private http:HttpClient) { }
vendorid:any
headerarray:any=[]
header:any
Data:any
search:any
baseUrl : string='http://localhost:3000/purchaseorder';
  ngOnInit(): any {
    this.vendorid=localStorage.getItem('vendorid')
    return this.http.post(this.baseUrl,{
      vendorid:this.vendorid
        }).subscribe(
          response =>{
            console.log(response)
            this.Data = JSON.parse(JSON.stringify(response));
           this.header=this.Data.IT_HEADER.item;
          // console.log(this.header);
           for(let i=1;i<this.header.length;i++){
            this.headerarray[i-1]=this.header[i]
           }
           console.log(this.headerarray);
           
           
           
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
  ngAfterViewInit(): void {


     
  }
  show(a:any){
    
    console.log(a.PO_NUMBER);
  
  }
  
}
