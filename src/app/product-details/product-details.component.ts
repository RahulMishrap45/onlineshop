import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../services/productservice.service';
import { product } from '../shared/model.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

 productdata: product | undefined;

 defaultQuantity =1;
  constructor(private productservice:ProductserviceService,private route:ActivatedRoute){}

  ngOnInit(): void{
  let value =this.route.snapshot.params[('productid')];
  this.productservice.getProductUpdata(value).subscribe(data =>{
    this.productdata=data;
    console.log(this.productdata);
  });
  }

  addproduct(add : string){
    if(this.defaultQuantity<10 && add==='+'){
      this.defaultQuantity=this.defaultQuantity+1;
    }
  }

  subproduct(sub : string){
    if(sub==='-' && this.defaultQuantity>1){
      this.defaultQuantity=this.defaultQuantity-1;
    }
  }


  AddToCart() {
    if(this.productdata){
      this.productdata.quantity=this.defaultQuantity;
      console.log(this.productdata);
    }
  }
}
