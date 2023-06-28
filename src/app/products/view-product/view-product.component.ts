import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductService } from 'src/services/product.service';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{
  productId!: number;

  constructor(
    private productService: ProductService,
    private actRoute: ActivatedRoute
  ) {}


  productData: any[]=[];


  ngOnInit() {
    this.productId = this.actRoute.snapshot.params['id'];

    this.productService
      .getProductsById(this.productId) 
      .subscribe((res) => {
        console.log(res);
        this.productData = res;
        console.log(this.productData);
      });
  }
}
