import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { PhoneComponent } from './pages/phone/phone.component';
import { TanComponent } from './pages/tan-number/tan.component';
import { CompletionWebshopComponent } from './pages/completion-webshop/completion.component';
import { CompletionAutomatComponent } from './pages/completion-automat/completion.component';
import { ErrorConnectionComponent } from './pages/error-connection/error.component';
import { ErrorTechnicalComponent } from './pages/error-technical/error.component';
import { ProductselectComponent } from './pages/productselect/productselect.component';
import { SplashComponent } from './pages/splash/splash.component';

const routes: Routes = [
  {
    path: '',
    component: SplashComponent,
    data: {
      title: "Splash"
    }
  },
  {
    path: 'splash',
    component: SplashComponent,
    data: {
      title: "Splash"
    }
  },
  {
    path: 'productselect-automat',
    component: ProductselectComponent,
    data: {
      title: "Produktwahl"
    }
  },
  {
    path: 'productselect-webshop',
    component: HomeComponent,
    data: {
      title: "Produktwahl"
    }
  },
  {
    path: 'payment',
    component: PaymentComponent,
    data: {
      title: "Zahlungsart wählen"
    }
  },
  {
    path: 'phone',
    component: PhoneComponent,
    data: {
      title: "Rufnummer eingeben"
    }
  },
  {
    path: 'tan-number',
    component: TanComponent,
    data: {
      title: "TAN eingeben"
    }
  },
  {
    path: 'completion-webshop',
    component: CompletionWebshopComponent,
    data: {
      title: "Abschluss"
    }
  },
  {
    path: 'completion-automat',
    component: CompletionAutomatComponent,
    data: {
      title: "Abschluss"
    }
  },
  {
    path: 'error-technical',
    component: ErrorTechnicalComponent,
    data: {
      title: "Fehlermeldung"
    }
  },
  {
    path: 'error-connection',
    component: ErrorConnectionComponent,
    data: {
      title: "Fehlermeldung"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
