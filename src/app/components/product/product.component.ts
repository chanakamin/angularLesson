import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import { products } from '../../data/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // כך מגדירים משתנה שאמור לקבל את ערכו מחוץ לקומפוננטה
  product?: Product;

  // כך מגדירים ארוע שיכול לקרות בתוך הקומפוננטה, והקמפוננטות החיצוניות אמורת להאזין לו.
  // תמיד הארועים הם מסוג שנקרא eventEmitter
  // הסוג שלו הוא הנתונים שאותם נשלח
  @Output() productAddedToCart: EventEmitter<Product> = new EventEmitter<Product>();

  // activatedRoute - סרוויס שמכיל הרבה מידע על הניווט הנוכחי שנמצאים בו
  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) {
    // הפונקציה subscribe
    // מקבלת פונקציה שהיא מקבלת כפרמטר את הערך הנוכחי העדכני
    this.activatedRoute.params
    // pipe - פונקציה שמקבלת אופרטורים
    .pipe(
      map(params => parseInt(params['id'])),
      filter(id => {
        if (isNaN(id)) {
          return false;
        }
        return true;
      }),
      switchMap(id =>  this.productsService.getProduct(id))
    )
    .subscribe(product => {
      console.log(product);
      this.product = product;
    })
   }

  ngOnInit(): void {
  }

  addProductToCart(): void {
    // זו הצורה שבה מיידעים את העולם החיצון שעכשיו קרה משהו
    this.productAddedToCart.emit(this.product);
  }

}
