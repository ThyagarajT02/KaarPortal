import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustinvService {

  constructor() { }
  received:any
  setmessage(data:any){
this.received=data;
  }
  getmessage(){
    return this.received;
  }
}
