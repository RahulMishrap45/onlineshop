import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Model, sellerlogIn } from '../shared/model.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private route:Router) { }

  userPostMessage(data:any){
    return this.http.post("http://localhost:3000/users",data,{observe: 'response'})
    .subscribe(result =>{
      if(result){
        console.log(result.body);
        localStorage.setItem('users',JSON.stringify(result));
        this.route.navigate(['/home']);
      }
    });
  }

  usergetMessage(data:sellerlogIn){
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'})
    .subscribe((result:any)=>{
      if(result){
        localStorage.setItem('users',JSON.stringify(result.body[0]));
        this.route.navigate(['/home']);
      } 
    });
  }
}
