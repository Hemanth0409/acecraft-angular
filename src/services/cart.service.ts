import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Cartlist } from 'src/models/cartlist';
@Injectable({
  providedIn: 'root'
})
export class CartService {


  url:string='';
  cartUrl='http://localhost:3000/cart_list'
    constructor(private http:HttpClient) { 
      this.url=this.cartUrl+'/'
    }
  addToCart(product:Cartlist){
    this.http.post<Cartlist[]>(this.cartUrl,product).subscribe((data)=>{
      console.log(data)
    })
  }
    getCartItem(){
      return this.http.get<Cartlist[]>(this.cartUrl);
    }
  
    removeCartItem(item:any){
      return this.http.delete(this.url+item.id)
    }
  
    public countSubject=new Subject<number>();
    getCount(){
      return this.getCartItem().subscribe((res)=>{
        this.countSubject.next(res.length);
        console.log(this.countSubject+'inside sub')
      })
    }
}
