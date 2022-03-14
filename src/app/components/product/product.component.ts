import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // כך מגדירים משתנה שאמור לקבל את ערכו מחוץ לקומפוננטה
  @Input() product?: Product;

  // כך מגדירים ארוע שיכול לקרות בתוך הקומפוננטה, והקמפוננטות החיצוניות אמורת להאזין לו.
  // תמיד הארועים הם מסוג שנקרא eventEmitter
  // הסוג שלו הוא הנתונים שאותם נשלח
  @Output() productAddedToCart: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  addProductToCart(): void {
    // זו הצורה שבה מיידעים את העולם החיצון שעכשיו קרה משהו
    this.productAddedToCart.emit(this.product);
  }

}
