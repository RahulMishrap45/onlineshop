import { Component } from '@angular/core';
import { Model, sellerlogIn } from '../shared/model.model';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
showlogIn=true;
showloginError = '';
  constructor(private sellerauth:SellerService){}

  ngOnInit():void{
    this.sellerauth.reloadSellerAuth();
  }

  signup(data:Model){
    this.sellerauth.PostMessage(data);
  }

  login(data:sellerlogIn){
    this.showloginError='';
    this.sellerauth.getLogIn(data);
    this.sellerauth.logInerror.subscribe((error:boolean) => {
      if(error){
        this.showloginError="Invalid Crediential";
      }
    })
  }

  sellerlogin(){
    this.showlogIn=false;
  }

  sellerSignUp(){
    this.showlogIn=true;
  }

}
