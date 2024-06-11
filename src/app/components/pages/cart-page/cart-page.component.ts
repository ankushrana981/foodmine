import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { Cart } from '../../shared/models/cart';
import { CartItem } from '../../shared/models/cartItem';
import { CurrencyPipe, NgForOf } from '@angular/common';
import { NotFoundComponent } from '../../shared/not-found/not-found.component';
import { TitleComponent } from '../../shared/title/title.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [RouterModule, TitleComponent,NotFoundComponent, CurrencyPipe, NgForOf],
  providers:[CartService],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
cart!:Cart;
constructor(private cartService:CartService){
this.cartService.getCartObservable().subscribe(cart=>{
  if(cart){
    this.cart = cart;
  }
})
}

removeFromCart(cartItem:CartItem){
  this.cartService.removeCartItem(cartItem.food.id)
}

changeQuantity(cartItem:CartItem, quantityInString:string){
  const quantity = parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.food.id, quantity)
}
}
