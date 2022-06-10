import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { ConfigService } from './config.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.config.baseUrl}/products`, {
      headers: { 
        authorization: `Bearer ${this.userService.getUser()?.token}`,
      }
    });
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.config.baseUrl}/products/${id}`, {
      headers: { 
        authorization: `Bearer ${this.userService.getUser()?.token}`,
      }
    });
  }

  constructor(private httpClient: HttpClient, private config: ConfigService, private userService: UserService) {
    
   }
}
