import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../services/productservice.service';
import { product } from '../shared/model.model';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {

  productsubmitted:string | undefined;
  constructor(private add:ProductserviceService,private route:Router){}

  addProductdata(data:product){
    this.add.addProduct(data).subscribe((result)=>{
      if(result){
        this.productsubmitted="Successfully Added!!"
      }
      setTimeout(()=>(this.productsubmitted=undefined),3000);
    })
  }
}
