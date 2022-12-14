import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ProductserviceService } from '../services/productservice.service';
import { product } from '../shared/model.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  productserch:undefined | product[];
  constructor(private route: Router, private productservice: ProductserviceService) { }

  ngOnInit(): void {
    this.route.events.subscribe((data: any) => {
      if (data.url) {
        if (localStorage.getItem('seller') && data.url.includes('seller')) {
          this.menuType = 'seller'
        } else {
          this.menuType = 'default'
        }
      }
    })
  }

  logoutSeller() {
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

  getProductSerch(event: KeyboardEvent) {
    if (event){
      const query = event.target as HTMLInputElement;
      console.log(query.value);
      this.productservice.getProductSerch(query.value).subscribe(data => {
        console.log(this.productserch=data);
        if(data.length>5){
          data.length=5;
        }
      });
    }
  }

  hideserch(){
    this.productserch=undefined;
  }

  serchdata(data:string){
    this.route.navigate([`serch/${data}`]);
  }

  suggestionSerch(item: number){
    this.route.navigate(['/product-details/'+item]);
  }
}
