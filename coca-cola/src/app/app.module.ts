import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MATERIAL
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PAGES
import { CookieComponent } from './cookie/cookie.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductselectComponent } from './pages/productselect/productselect.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { PhoneComponent } from './pages/phone/phone.component';
import { TanComponent } from './pages/tan-number/tan.component';
import { CompletionWebshopComponent } from './pages/completion-webshop/completion.component';
import { CompletionAutomatComponent } from './pages/completion-automat/completion.component';
import { ErrorConnectionComponent } from './pages/error-connection/error.component';
import { ErrorTechnicalComponent } from './pages/error-technical/error.component';
import { SplashComponent } from './pages/splash/splash.component';

// DIRECTIVES
import { ScrollTracker } from './directives/ScrollTracker.directive'

// SERVICES
import { ProductsService } from './services/products.service';

// STRUCTURE
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CookieComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PaymentComponent,
    PhoneComponent,
    TanComponent,
    CompletionWebshopComponent,
    CompletionAutomatComponent,
    ErrorConnectionComponent,
    ErrorTechnicalComponent,
    ProductselectComponent,
    ScrollTracker,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatRadioModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [Title,ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
