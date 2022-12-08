import { Component } from '@angular/core';
import { Model } from '../shared/model.model';
import { SellerService } from '../shared/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private sellerauth:SellerService){}
  signup(data:Model){
    this.sellerauth.PostMessage(data).subscribe(data => {
      console.log(data);
    })
  }

}
