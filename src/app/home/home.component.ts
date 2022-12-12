import { Component } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';
import { product } from '../shared/model.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productlist:undefined | product[];
  constructor(private productservice:ProductserviceService){}
  
  ngOnInit():void{
    this.productservice.getProductlimit().subscribe(data=>{
    this.productlist=data;
    });
  }
}