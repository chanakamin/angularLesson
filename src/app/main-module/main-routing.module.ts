import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../components/cart/cart.component';
import { HomeComponent } from '../components/home/home.component';
import { MainComponentComponent } from '../components/main-component/main-component.component';
import { NewProductComponent } from '../components/new-product/new-product.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ProductComponent } from '../components/product/product.component';
import { ProductsComponent } from '../components/products/products.component';
import { UserService } from '../services/user.service';

const routes: Routes = [ {
  path: '',  
  component: MainComponentComponent,
  canActivate: [UserService],
  children: [ {
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
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
