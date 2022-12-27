import { Component } from '@angular/core';
import { Model, sellerlogIn } from '../shared/model.model';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
showlogIn=true;
showloginError = '';
Invalid:string|undefined;
  constructor(private sellerauth:SellerService,private route:Router){}

  // ngOnInit():void{
  //   this.sellerauth.reloadSellerAuth();
  // }

  // signup(data:Model){
  //   this.sellerauth.PostMessage(data);
  // }

  login(data:Model){
    this.showloginError='';
    this.sellerauth.adminlogIn(data).subscribe(result =>{
      if(result){
        this.route.navigate(['seller-home']);
      }else{
        this.Invalid="Invalid Credential!!";
      setTimeout(()=>{
        this.Invalid=undefined
      },2000);
      }
    });

    // this.sellerauth.logInerror.subscribe((error:boolean) => {
    //   if(error){
    //     this.showloginError="Invalid Crediential";
    //   }
    // })
  }

  sellerlogin(){
    this.showlogIn=true;
  }

  sellerSignUp(){
    this.showlogIn=false;
  }

}
