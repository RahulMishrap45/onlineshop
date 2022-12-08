import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }
  url:string="http://localhost:3000/seller";

  PostMessage(data:object){
    return this.http.post(this.url,data);
  }
}
