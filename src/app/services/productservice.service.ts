import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../shared/model.model';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }

  addProduct(data:product){
    return this.http.post('http://localhost:3000/Products',data);
  }
}
