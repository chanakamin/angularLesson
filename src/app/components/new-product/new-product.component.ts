import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { products } from '../../data/products';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  newProduct?: Product;

  initProduct() {
    this.newProduct = {
      code: 0,
      description: '',
      name: 'asd',
      price: 0,
      quantity: 0,
    };
  }

  // ייבוא של ספריה לתוך קומפוננטה ע"י שימוש ב dependency injection
  constructor(private router: Router) {
    this.initProduct();
   }

  ngOnInit(): void {}

  addProduct(e: SubmitEvent): void {
    e.preventDefault();
    this.newProduct && (this.newProduct.code = products.length);
    products.push(this.newProduct as Product);
    this.initProduct();
    // ניווט דרך הקוד
    this.router.navigateByUrl('/products');
  }

}
