import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomernumberService {

  constructor() { }
  customernumber:any
  setmessage(custno:any){
    this.customernumber=custno;
  }
  getmessage(){
    return this.customernumber;
  }
}
