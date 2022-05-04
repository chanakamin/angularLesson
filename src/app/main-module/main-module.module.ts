import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../components/cart/cart.component';
import { HomeComponent } from '../components/home/home.component';
import { MainComponentComponent } from '../components/main-component/main-component.component';
import { NewProductComponent } from '../components/new-product/new-product.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ProductComponent } from '../components/product/product.component';
import { ProductsComponent } from '../components/products/products.component';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    CartComponent,
    NewProductComponent,
    HomeComponent,
    PageNotFoundComponent,
    MainComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
  ]
})
export class MainModuleModule { }
