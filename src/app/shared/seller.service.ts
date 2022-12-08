import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from './model.model';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }
  url:string="http://localhost:3000/seller";

  PostMessage(data:Model){
    return this.http.post(this.url,data);
  }
}
