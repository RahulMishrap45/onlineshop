import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Model, sellerlogIn } from '../shared/model.model';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  constructor(private http:HttpClient,private route:Router) { }

  islogedin = new BehaviorSubject<boolean>(false)
  logInerror = new EventEmitter<boolean>(false);
  url:string="http://localhost:3000/seller";

  PostMessage(data:Model){
    this.http.post(this.url,data,{observe:'response'}).subscribe(data =>{
      this.islogedin.next(true);
      localStorage.setItem('seller',JSON.stringify(data.body));
      console.log(localStorage);
      this.route.navigate(['seller-home']);
      console.log(data);
    });
  }
  reloadSellerAuth(){
      if(localStorage.getItem('seller')){
        this.islogedin.next(true);
        this.route.navigate(['seller-home'])
      }
  }

  getLogIn(data:sellerlogIn){
    console.log(data.email);
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result:any) =>{
      if(result && result.body.length){
      console.log("login Successfully");
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.route.navigate(['seller-home']);
      }else{
        console.log("login failed");
        this.logInerror.emit(true);
      }
    });
  }
}
