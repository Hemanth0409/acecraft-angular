import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import Products.ts(interface - properties)
import { Products } from 'src/models/product';
import { environment } from 'src/Environment/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //Product Details Url
  url =environment.url
  constructor(private http: HttpClient) { }

  //Fetch the Over All Product Details 
  getProducts() {
    return this.http.get<Products[]>(this.url);
  }

  //Fetch the Product Details based on the id
  getProductsById(id: number) {
    return this.http.get<Products[]>(this.url + '?id=' + id);
  }
}
