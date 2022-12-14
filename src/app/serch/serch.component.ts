import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../services/productservice.service';
import { product } from '../shared/model.model';

@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.css']
})
export class SerchComponent {
  afterSerchProduct:undefined | product[];
  noItem=true;
  
  constructor(private router:ActivatedRoute,private productservice:ProductserviceService){}

  ngOnInit():void{
  let query = this.router.snapshot.params['query'];
  query && this.productservice.getProductSerch(query).subscribe(data =>{
      this.afterSerchProduct=data;
      if(this.afterSerchProduct.length>0){
        this.itemfound();
        console.log("greater then zero");
      }
      else{
        this.noitemfound();
        console.log("less then zero");
      }
  })
}
itemfound(){
  this.noItem=false;
}

noitemfound(){
  this.noItem=true;
}
}
