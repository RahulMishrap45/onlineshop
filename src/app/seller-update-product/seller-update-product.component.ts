import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductserviceService } from '../services/productservice.service';
import { product } from '../shared/model.model';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
  productdata:undefined | product;
  updated:string | undefined;
  constructor(private route:ActivatedRoute,private productservice:ProductserviceService,
    private router:Router){}
  ngOnInit():void{
    let productId = this.route.snapshot.paramMap.get('id');
    console.log(productId);
    productId && this.getproduct(productId);
  }

  getproduct(productId:string){
    console.log(this.productservice.getProductUpdata(productId).subscribe(data =>{
      console.log(data);
      this.productdata=data;
    }));
  }

  addProductdata(data:product){
    if(this.productdata){
      data.id=this.productdata.id
    }
    this.productservice.addProductdata(data).subscribe(result =>{
      this.updated="updated!!";
      setTimeout(()=>{
        this.updated=undefined;
        this.router.navigate(['/seller-home'])
      },2000);
    });
  };
}
