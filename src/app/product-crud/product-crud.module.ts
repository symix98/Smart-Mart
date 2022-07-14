import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCrudRoutingModule } from './product-crud-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';


@NgModule({
  declarations: [
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    ProductCrudRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductCrudModule { }
