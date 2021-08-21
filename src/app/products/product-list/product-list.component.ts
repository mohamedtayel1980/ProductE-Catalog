import { Product } from './../../models/Product';
import { ProductService } from './../../_services/product.service';
import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/models/Type';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   products:Product[] =[];
   Type = Type;
  constructor(private productService:ProductService ) { }

  ngOnInit(): void {
    this.products=this.productService.getAll();
  }
  delete(id:number){

  }
}
