import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { Router } from '@angular/router';
import { Cartlist } from 'src/models/cartlist';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.css']
})
export class CartdetailsComponent implements OnInit{
  item: boolean =true;
  constructor(private cartSvc: CartService, private router:Router) { }

  carts:Cartlist={
    id: 0,
    title: '',
    price: 0,
    size:'',
    imgSrc: '',
    quantity: 1,
    productCode: '',
    brand: '',
    soldBy: '',
    originalPrice: 0,
    offerPercent: 0,
    gender: '',
    description: [],
    totalprice: 1
  }
  cart_details:any=[];
  totalprice:number=0;
  quantity=1;
  totalPrice(data:any){

  const intialValue = 0;
  this.cart_details=data
  const total=this.cart_details.reduce((sum:any,item:any)=>sum+(item.price*item.quantity),intialValue);
  return total;
  }
  cart:Cartlist[]=[]
  onIncerment(item:Cartlist){
    item.quantity++;
    this.cartSvc.updateCart(item)
  } 
   onDecrement(item:Cartlist){
    if(item.quantity==1){
      this.delete(item)
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
  
      Toast.fire({
        icon: 'success',
        title: 'Product has been removed successfully'
      }).then(() => { 

      this.router.navigate (['/cart_details']);
  })}
    item.quantity--; 
    this.cartSvc.updateCart(item)

   
  }
  delete(deleteItem:Cartlist){
  
    this.cartSvc.removeCartItem(deleteItem).subscribe()
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'success',
      title: 'Product has been removed successfully'
    })
    this.ngOnInit();
    this.cartSvc.getCount();
  }
  onClick(){
    this.router.navigate(['/products'])
  }
  productId!: number;
  viewProduct(id: number) {
    this.productId = id;
    this.router.navigate(['viewProduct/' + id]);
  
}
display:any=[]
invokeStripe() {
  if (!window.document.getElementById('stripe-script')) {
    const script = window.document.createElement('script');
    script.id = 'stripe-script';
    script.type = 'text/javascript';
    script.src = 'https://checkout.stripe.com/checkout.js';
    script.onload = () => {
      this.paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51NPh3qSFbA4ym3tq5OuiThaAv73vMeEQIjVSjtuB3azK7OfogbPNpQJVop9bWUEp2nhwXDJxM6wHFRAoDTMrWkmH004m2qMl3d',
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });

          Toast.fire({
            icon: 'error',
            title: 'Error in generating Stripe Payment Gateway',
          });
        },
      });
    };
    window.document.body.appendChild(script);
  }
}

isHidden:boolean=true
  none='block'


  ngOnInit(): void {
    this.cartSvc.getCartItem().subscribe((res)=>{this.cart=res;})
    this.cartSvc.getCartItem().subscribe(
      (response)=>{
        this.display=response;
       if(this.display==0){
        this.isHidden=false//for hiding the default message
        this.none="none"
        console.log(this.isHidden);
       }
        console.log(this.display);
      }
    )
    this.invokeStripe();
  }

  paymentHandler: any = null;

 
  makePayment(amount: any) {
  
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51NPhAIDBuqf3gYxJaVuM2k513NFWYSUuvSK29hPVgHKx92rd2dBhz5xEc5qABUMoi12szZZ7Ik3nI7gU21hXkffC00vHQmnBMf',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        //alert('Stripe token generated!');
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: 'success',
          title: 'Order Placed Successfully',
        });
      },
    });
    paymentHandler.open({
      name: 'Course',
      description: 'Order Details',
      amount: amount,
    });
  }

}
