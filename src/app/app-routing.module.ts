import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login/login.component';
import { CreateProductComponent } from './product-crud/create-product/create-product.component';

const routes: Routes = [
   { path: '', component: LoginComponent },
   { path: 'home', component: HeaderComponent },
   { path: 'create-product', component: CreateProductComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
