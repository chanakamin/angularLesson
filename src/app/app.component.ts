import { Component } from '@angular/core';
import { Product } from './interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cart: Array<{ product: Product, quantity: number}> = [];

  updateCart(product: Product) {
    const existing = this.cart.find(c => c.product === product);
    if (existing) {
      existing.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
    product.quantity--;
  }

  updateCartSubQuantity(c: { product: Product, quantity: number}) {
    c.quantity--;
    c.product.quantity++;
    if (!c.quantity) {
      const index = this.cart.indexOf(c);
      this.cart.splice(index, 1);
    }
  }
}
