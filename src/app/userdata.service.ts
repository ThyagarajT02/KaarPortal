import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  address:any
  customerno:any;
  name:any;
  city:any;
  pincode:any;
  region:any;
  phonenumber:any;
  array:any;
    constructor() { }
    setMessage(addr:any){
      //addr: any,custno:any,un:any,cty:any,pcode:any,rgn:any,phno:any
      this.address=addr;
      // this.customerno=custno;
      // this.name=un;
      // this.city=cty;
      // this.pincode=pcode;
      // this.region=rgn;
      // this.phonenumber=phno;
    }
    getMessage(){
      this.array=this.address;
      // this.array[1]=this.customerno;
      // this.array[2]=this.name;
      // this.array[3]=this.city;
      // this.array[4]=this.pincode;
      // this.array[5]=this.region;
      // this.array[6]=this.phonenumber;
      return this.array;
    }
}
