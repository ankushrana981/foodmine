import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';

export const routes: Routes = [
          {
                    path: '',
                    component: HomeComponent
          },
          {
                    path:'search/:searchTerm',
                    component: HomeComponent
          },
          {
                    path:'tag/:tag',
                    component: HomeComponent
          },
          {
                    path:'food/:id',
                    component:FoodPageComponent
          },
          {
                    path:'cart-page',
                    component: CartPageComponent
          },
          {
                    path:'login',
                    component: LoginPageComponent,
          },
          {
                    path:'register',
                    component:RegisterComponent
          },
          {
                    path:'checkout',
                    component:CheckoutComponent,
                    canActivate:[AuthGuard]
          },
          {
                    path:'payment',
                    component:PaymentPageComponent,
                    canActivate:[AuthGuard]
          }

];
