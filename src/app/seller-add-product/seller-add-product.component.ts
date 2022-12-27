import { Component } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';
import { product } from '../shared/model.model';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {

  imagefile = File;
  productsubmitted:string | undefined;
  constructor(private add:ProductserviceService){}

  addProductdata(data:product){
    //create form data object
    // const formdata = new FormData();
    // formdata.append("userData", this.data.value);
    // formdata.append("image", this.imagefile);

    this.add.addProduct(data).subscribe((result)=>{
      if(result){
        this.productsubmitted="Successfully Added!!"
      }
      setTimeout(()=>(this.productsubmitted=undefined),3000);
    })
  }
  
  fileselected(event:any){
    if(event.target.files){
      const file = event.target.files[0];
      this.imagefile = file;
    }
  }
}
