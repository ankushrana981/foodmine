import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/models/order';
import { UserService } from '../../../services/user.service';
import { CartService } from '../../../services/cart.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleComponent } from '../../shared/title/title.component';
import { OrderItemsListComponent } from '../../shared/order-items-list/order-items-list.component';
import { MapComponent } from '../../shared/map/map.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [TitleComponent, ReactiveFormsModule, FormsModule, OrderItemsListComponent, MapComponent],
  providers:[CartService, UserService],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
order:Order= new Order();
checkoutForm!: FormGroup;
constructor(cartService:CartService,private userService:UserService, private formBuilder:FormBuilder){
  if(cartService.Cart){
    this.order.items = cartService.Cart.items;
    this.order.totalPrice = cartService.Cart.totalPrice;
  }

}
ngOnInit(): void {
  let {name, address} = this.userService.CurrentUser
  this.checkoutForm = this.formBuilder.group({
    name:[name , Validators.required],
    address:[address , Validators.required]
  })
}
createOrder(){

}
}
