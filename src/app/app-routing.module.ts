import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SerchComponent } from './serch/serch.component';
import { AuthSellerGuard } from './shared/auth-seller.guard';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'seller-auth', component:SellerAuthComponent},
  {path:'seller-home',component:SellerHomeComponent,canActivate:[AuthSellerGuard]},
  {path:'seller-add-product',component:SellerAddProductComponent,canActivate:[AuthSellerGuard]},
  {path:'seller-update-product/:id',component:SellerUpdateProductComponent,canActivate:[AuthSellerGuard]},
  {path:'serch/:query',component:SerchComponent},
  {path:'product-details/:productid',component:ProductDetailsComponent},
  {path:'user-auth', component:UserAuthComponent}
  // {path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
