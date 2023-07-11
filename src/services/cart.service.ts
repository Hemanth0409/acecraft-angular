import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Cartlist } from 'src/models/cartlist';
import Swal from 'sweetalert2';
import { environment } from 'src/Environment/environment';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  //cart details json URL
  url: string = '';
  cartUrl = environment.cartUrl
  constructor(private http: HttpClient) {
    this.url = this.cartUrl + '/'
  }

  //Post the cart list(create)
  addToCart(product: Cartlist) {
    this.http.post<Cartlist[]>(this.cartUrl, product).subscribe((data) => {
      console.log(data)
    })
  }

  //Update a details(Put) 
  updateCart(product: Cartlist) {
    let updateUrl = this.cartUrl + '/' + product.id
    this.http.put<Cartlist[]>(updateUrl, product).subscribe(() => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timerProgressBar: true,
      })

      Toast.fire({
        icon: 'success',
        title: 'Item updated successfully'
      })
    }
    )
  }

  //fetch cart items
  getCartItem() {
    return this.http.get<Cartlist[]>(this.cartUrl);
  }

  //Remove the product (Delete)
  removeCartItem(item: any) {
    return this.http.delete(this.url + item.id)
  }

  //Fetch the count of cart items
  public countSubject = new Subject<number>();
  getCount() {
    return this.getCartItem().subscribe((res) => {
      this.countSubject.next(res.length);
    })
  }
}
