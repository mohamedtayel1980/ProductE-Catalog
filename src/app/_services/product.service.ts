import { getNumberOfCurrencyDigits } from '@angular/common';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Type } from '../models/Type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Array<Product> = [];
  Type = Type;
  constructor() {
    this.products.push(new Product(1, "shirt", "desc", 150, Type.Basic));
    this.products.push(new Product(2, "t-shirt", "desc", 200, Type.Premium));
    this.products.push(new Product(3, "scirt", "desc", 120, Type.Basic));

    if (localStorage.getItem("products") == null) {
    this.setStore();

    }
    this.getStroge();

  }

  getAll(): Product[] {
    return this.products;
  }
  getById(id: number): Product {
    const product = this.products.filter(x => x.id == id);
    return product[0];
  }

  insert(p: Product): boolean {
    this.products.push(
      new Product(p.id, p.name, p.description, p.amount, p.type)
    );
    localStorage.setItem("products", JSON.stringify(this.products));
    return true
  }
  edit(id: number, p: Product): boolean {
    this.products = this.products.map(product => {
      if (product.id == id) {
        product.name = p.name,
          product.amount = p.amount,
          product.description = p.description,
          product.type = p.type
      }
      return product
    });
    return true;
  }
  delete(id: number):boolean {
    this.products= this.products.filter(x => x.id != id);
    return true;
  }

  setStore(){
    localStorage.setItem("products", JSON.stringify(this.products));
  }
  getStroge(){
    this.products = JSON.parse(localStorage.getItem('products') || '{}');
  }
}
