import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Location } from '@angular/common';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public pageTitle: any;
  public productSumTotal: number = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private location: Location,
    public productsService: ProductsService
  ) {}

  trackByFn(index: any, item: any) {
    return item.id;
  }

  reduceProductQuantity(productId:number){
    const productList = this.productsService.addedProducts;
    const productIdx = productList.findIndex(((obj: { id: number; }) => obj.id === productId));

    productList[productIdx].quantity--;

    if(productList[productIdx].quantity === 0)
      productList.splice(productIdx,1)
  }

  addProductQuantity(productId:number){
    const productList = this.productsService.addedProducts;
    const productIdx = productList.findIndex(((obj: { id: number; }) => obj.id === productId));

    productList[productIdx].quantity++;
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const rt = this.getChild(this.activatedRoute);
        rt.data.subscribe((data: any) => {
          console.log(data);
          this.titleService.setTitle(data.title);
          this.pageTitle = data.title;
        });
      });
  }

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

  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

  back(): void {
    this.location.back();
  }
}
