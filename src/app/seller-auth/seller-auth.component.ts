import { Component } from '@angular/core';
import { SellerService } from '../shared/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private sellerauth:SellerService){}
  signup(data:object){
    this.sellerauth.PostMessage(data).subscribe(data => {
      console.log(data);
    })
  }

}
