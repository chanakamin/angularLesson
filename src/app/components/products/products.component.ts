import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Output() cartUpdated: EventEmitter<Product> = new EventEmitter<Product>();

  products: Observable<Product[]> = this.productsService.getProducts();

  constructor(private productsService: ProductsService) { 
  }

  ngOnInit(): void {
  }

  addProductToCart(product: Product): void {
    console.log('addProductToCart', product);
    this.cartUpdated.emit(product);
  }

}
