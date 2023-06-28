import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  public show: boolean = true;
  toggle() {
    this.show = !this.show;
  }
  cart_Count = 0;
  constructor(private cartSvc: CartService) { }
  ngOnInit(): void {
    this.cartSvc.getCartItem().subscribe((res) => {
      this.cart_Count = res.length;
      console.log(this.cart_Count);
    });
    this.cartSvc.countSubject.subscribe((res) => {
       this.cart_Count = res; 
      console.log(this.cart_Count)})
  }
}
