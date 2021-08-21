import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './product/products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsWrapperComponent } from './products-wrapper/products-wrapper.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductsWrapperComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
