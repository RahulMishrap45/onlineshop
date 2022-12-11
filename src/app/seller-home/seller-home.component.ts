import { Component, DefaultIterableDiffer, OnInit } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';
import { product } from '../shared/model.model';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent{
  productlist:product[]=[];
  deletesuccess:string | undefined;
  constructor(public sellerproduct:ProductserviceService){
  }
  ngOnInit():void{
   this.getproduct();
  }

  getproduct(){
    this.sellerproduct.getProduct().subscribe(data =>{
      console.log(this.productlist=data);
    })
  }
  
  deleteitem(id:number){
    console.log(id);
    this.sellerproduct.deleteproduct(id).subscribe((result) =>{
      if(result){
        this.deletesuccess="deleted!!"
        setTimeout(()=>(this.deletesuccess=undefined),3000);
        this.getproduct();
      }
    })
  }
}
