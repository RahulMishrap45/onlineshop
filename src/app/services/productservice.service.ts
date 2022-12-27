import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../shared/model.model';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  productlist: product[]=[];
  productdata:product = new product();
  constructor(private http:HttpClient) { }

  addProduct(data:product){
    return this.http.post('http://localhost:8080/onlineshop/addproducts',data);
  }
  getProduct():Observable<product[]>{
    return this.http.get<product[]>('http://localhost:8080/onlineshop/getproducts');
  }

  deleteproduct(id:number){
    return this.http.delete(`http://localhost:8080/onlineshop/${id}`);
  }

  getProductUpdata(id:string){
    return this.http.get<product>(`http://localhost:8080/onlineshop/getproduct/${id}`);
  }

  addProductdata(data:product){
    return this.http.put(`http://localhost:3000/Products/${data.id}`,data);
  }

  getProductlimit():Observable<product[]>{
    return this.http.get<product[]>('http://localhost:8080/onlineshop/getproducts');
  }
  
  getProductSerch(event:string){
    return this.http.get<product[]>(`http://localhost:3000/Products?q=${event}`);
  }
}
