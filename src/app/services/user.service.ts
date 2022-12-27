import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Model, sellerlogIn } from '../shared/model.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private url ="http://localhost:8080/onlineshop/userRegister"

  constructor(private http:HttpClient,private route:Router) { }

  // userPostMessage(data:any){
  //   return this.http.post("http://localhost:3000/users",data,{observe: 'response'})
  //   .subscribe(result =>{
  //     if(result){
  //       console.log(result.body);
  //       localStorage.setItem('users',JSON.stringify(result));
  //       this.route.navigate(['/home']);
  //     }
  //   });
  // }
  userRegister(data:Model){
    return this.http.post(this.url,data).subscribe(result=>{
      if(result){
        console.log(result);
        this.route.navigate(['/home']);
      }
    })

  }

  userlogin(data:Model){
    return this.http.post("http://localhost:8080/onlineshop/getEmailPassword",data)
  }
}
