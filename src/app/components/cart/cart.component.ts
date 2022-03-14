import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart: Array<{ product: Product, quantity: number}> = [];
  @Output() subQuantity: EventEmitter<{ product: Product, quantity: number}> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  subQuantityOfProduct(c: { product: Product, quantity: number}) {
    this.subQuantity.emit(c);
  }

}
