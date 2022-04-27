import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
},{
  path: 'products',
  component: ProductsComponent,
  children: [{
    path: 'new',
    component: NewProductComponent,
  }, {
    path: ':id',
    component: ProductComponent,
  }]
}, {
  path: 'cart',
  component: CartComponent,
}, {
  path: '**',
  component: PageNotFoundComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
