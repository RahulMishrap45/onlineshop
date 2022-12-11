import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../shared/model.model';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  productlist: product[];

  constructor(private http:HttpClient) { }

  addProduct(data:product){
    return this.http.post('http://localhost:3000/Products',data);
  }
  getProduct():Observable<product[]>{
    return this.http.get<product[]>('http://localhost:3000/Products');
  }

  deleteproduct(id:number){
    return this.http.delete(`http://localhost:3000/Products/${id}`);
  }

  getProductUpdata(id:string){
    return this.http.get<product>(`http://localhost:3000/Products/${id}`);
  }

  addProductdata(data:product){
    return this.http.put(`http://localhost:3000/Products/${data.id}`,data);
  }
}
