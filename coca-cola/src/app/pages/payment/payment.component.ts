import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public productSumTotal: number = 0;

  trackByFn(index: any, item: any) {
    return item.id;
  }

  constructor(
    public productsService: ProductsService
  ) { }

  ngAfterViewChecked() {
    setTimeout(() => {
      const productList = this.productsService.addedProducts;
      this.productSumTotal = productList.reduce(function(prev:any, cur:any) {
        return prev + (cur.price * cur.quantity);
      }, 0);
    });
  }

  get data(): any {
    return this.productsService.addedProducts;
  }

  ngOnInit(): void {

  }

}
