import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './wifi/home/home.component'
import { PaymentComponent } from './wifi/payment/payment.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
