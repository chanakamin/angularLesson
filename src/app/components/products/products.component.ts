import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { products } from 'src/app/data/products';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Output() cartUpdated: EventEmitter<Product> = new EventEmitter<Product>();

  products: Product[] = products;

  constructor() { }

  ngOnInit(): void {
  }

  addProductToCart(product: Product): void {
    console.log('addProductToCart', product);
    this.cartUpdated.emit(product);
  }

}
