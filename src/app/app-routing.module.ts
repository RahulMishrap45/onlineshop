import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { AuthSellerGuard } from './shared/auth-seller.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'seller-auth', component:SellerAuthComponent,canActivate:[AuthSellerGuard]},
  {path:'' ,component:HomeComponent},
  {path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
