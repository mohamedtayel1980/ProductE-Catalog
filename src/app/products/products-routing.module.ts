import { ProductsWrapperComponent } from './products-wrapper/products-wrapper.component';

import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './product/products.component';

const routes: Routes = [
  
  {
    path: '', component: ProductsWrapperComponent, children: [
      { path: '',  component: ProductListComponent },
      { path: 'add', component: ProductsComponent },
      { path: 'edit:id', component: ProductsComponent },
      { path: '*', redirectTo: "products", pathMatch: 'full' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
