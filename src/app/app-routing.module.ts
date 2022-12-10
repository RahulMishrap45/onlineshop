import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthSellerGuard } from './shared/auth-seller.guard';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'seller-auth', component:SellerAuthComponent},
  {path:'seller-home',component:SellerHomeComponent,canActivate:[AuthSellerGuard]},
  {path:'seller-add-product',component:SellerAddProductComponent,canActivate:[AuthSellerGuard]}
  // {path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
