import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './wifi/home/home.component';
import { PaymentComponent } from './wifi/payment/payment.component';
import { PhoneComponent } from './wifi/phone/phone.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: "Produktwahl"
    }
  },
  {
    path: 'wifi-landing',
    component: HomeComponent,
    data: {
      title: "Produktwahl"
    }
  },
  {
    path: 'wifi-payment',
    component: PaymentComponent,
    data: {
      title: "Zahlungsart wählen"
    }
  },
  {
    path: 'wifi-phone',
    component: PhoneComponent,
    data: {
      title: "Rufnummer eingeben"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
