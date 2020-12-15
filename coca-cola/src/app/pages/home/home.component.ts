import { Component, OnInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieComponent } from '../../cookie/cookie.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public productList:any = [];
  public products:any = [];
  curScrollPos = 0;
  limit = 6;
  endReached = false;

  constructor(
    public dialog: MatDialog,
    public productsService: ProductsService
  ) {}

  trackByFn(index:any, item:any) {
    return item.id;
  }

  addProductType(productId:number,productName:string,productPrice:any,productThumbnail:string){
    const productList = this.productsService.addedProducts;
    const checkProductAdded = productList.some((item: { id: number; }) => item.id === productId);

    if(!checkProductAdded && productList.length <= 2){
      const addProduct = [{
        id: productId,
        name:productName,
        price:productPrice,
        thumbnail:productThumbnail,
        quantity: 1
      }]

      productList.push(...addProduct)
    }

    //console.log(this.productsService.addedProducts)
  }

  // LOAD MORE - 6 items, 6 iteeems
  updateScrollPos(e:any) {
    this.curScrollPos = e.pos;
    this.endReached = e.endReached;

    if(this.endReached && (this.productList.length > this.products.length)){

      console.log(this.products)

      const append = this.productList.slice(
        this.products.length,
        this.products.length + this.limit
      );

      this.products = this.products.concat(append);
    }
  }

  ngOnInit(): void {
      const cookie = localStorage.getItem('CookieAcceptedCocaCola');

      if(!cookie)
        this.dialog.open(CookieComponent, {
          panelClass: 'cookie-modal'
        });

      this.productList = [
        {
          id:1,
          name:"Product 1",
          price: 2.30,
          thumbnail: "assets/products/CC_05L_EW_PET_b.png"
        },
        {
          id:2,
          name:"Product 2",
          price: 2.20,
          thumbnail: "assets/products/CCL_0_5L_EW_PET_b.png"
        },
        {
          id:3,
          name:"Product 3",
          price: 1.10,
          thumbnail: "assets/products/CCZ_0_5L_EW_PET_b.png"
        },
        {
          id:4,
          name:"Product 4",
          price: 2.00,
          thumbnail: "assets/products/FA_OR_0_5L_EW_PET.png"
        },
        {
          id:5,
          name:"Product 5",
          price: 2.00,
          thumbnail: "assets/products/FT_APF_0_33L_PET.png"
        },
        {
          id:6,
          name:"Product 6",
          price: 2.00,
          thumbnail: "assets/products/FT_MF_0_33L_PET_b.png"
        },
        {
          id:7,
          name:"Product 7",
          price: 2.00,
          thumbnail: "assets/products/FUZE_TEA_GRUEN_MA_KA_04L_EW_PET_b.png"
        },
        {
          id:8,
          name:"Product 8",
          price: 2.00,
          thumbnail: "assets/products/FUZE_TEA_GT_Blueberry_Jasmin_400ml_PET_EW.png"
        },
        {
          id:9,
          name:"Product 9",
          price: 2.00,
          thumbnail: "assets/products/FUZE_TEA_PFIR_04L_EW_PET_b.png"
        },
        {
          id:12,
          name:"Product 12",
          price: 2.00,
          thumbnail: "assets/products/CC_05L_EW_PET_b.png"
        },
        {
          id:13,
          name:"Product 13",
          price: 2.00,
          thumbnail: "assets/products/HL_ZI_HI_330ml_RGB.png"
        },
        {
          id:14,
          name:"Product 14",
          price: 2.00,
          thumbnail: "assets/products/HL_ZIT_330ml_RGB.png"
        },
        {
          id:15,
          name:"Product 15",
          price: 2.00,
          thumbnail: "assets/products/HT_MINZE_330ml_RGB.png"
        },
        {
          id:16,
          name:"Product 16",
          price: 2.00,
          thumbnail: "assets/products/HT_ZIHO_330ml_RGB.png"
        },
        {
          id:17,
          name:"Product 17",
          price: 2.00,
          thumbnail: "assets/products/LA_05L_EW_PET.png"
        },
        {
          id:18,
          name:"Product 18",
          price: 2.00,
          thumbnail: "assets/products/MMO_05L_EW_PET.png"
        },
        {
          id:19,
          name:"Product 19",
          price: 2.00,
          thumbnail: "assets/products/MMZ_05L_EW_PET_b.png"
        },
        {
          id:20,
          name:"Product 20",
          price: 2.00,
          thumbnail: "assets/products/PWR_MB_0_5L_EW_PET_b.png"
        },
        {
          id:21,
          name:"Product 21",
          price: 2.00,
          thumbnail: "assets/products/PWR_WC_0_5L_EW_PET.png"
        },
        {
          id:22,
          name:"Product 22",
          price: 2.00,
          thumbnail: "assets/products/SP_05L_EW_PET_b.png"
        }
      ]

      // INITIAL LOAD
      const append = this.productList.slice(
        this.products.length,
        this.products.length + this.limit
      );

      this.products = this.products.concat(append);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(CookieComponent, {
      panelClass: 'cookie-modal'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
