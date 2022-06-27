import { Component, OnInit } from '@angular/core';
import { CustinvService } from '../custinv.service';
import { HttpClient } from '@angular/common/http';
import  jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  
@Component({
  selector: 'app-custinvbill',
  templateUrl: './custinvbill.component.html',
  styleUrls: ['./custinvbill.component.css']
})
export class CustinvbillComponent implements OnInit {

  constructor(public inv:CustinvService,public http:HttpClient) { }
  profile:any
Data:any
baseUrl : string='http://localhost:3000/profile';
  custno:any;
  custid:any
  addr:any
  name:any
  city:any
  pcode:any
  region:any
  tel:any
  ngOnInit(): any {
    this.profile=(this.inv.getmessage())
    console.log(this.profile);
    
    this.custno=localStorage.getItem('customerno')
  return this.http.post(this.baseUrl,{
    customerno:this.custno
      }).subscribe(
        response =>{
       //   console.log(response)
          this.Data = JSON.parse(JSON.stringify(response));
          this.custid=this.Data.IT_OUTPUT.KUNNR;
         
         this.addr=this. Data.IT_OUTPUT.ADRNE
        this.name=this.Data.IT_OUTPUT.NAME1
           this.city=this. Data.IT_OUTPUT.ORT01
           this. pcode=this.Data.IT_OUTPUT.PSTLZ
           this.region=this. Data.IT_OUTPUT.REGIO
           this.tel=this. Data.IT_OUTPUT.TELF1
        }
      )
  }
  public captureScreen()  
  {  
    var data:any = document.getElementById('test');  //Id of the table
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      let imgWidth = 208;   
      let pageHeight = 295;    
      let imgHeight = canvas.height * imgWidth / canvas.width;  
      let heightLeft = imgHeight;  

      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      let position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 50, position, imgWidth, imgHeight)  
      pdf.save('Invoice.pdf'); // Generated PDF   
    });  
  }  

}

