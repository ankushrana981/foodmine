import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/models/order';
import { UserService } from '../../../services/user.service';
import { CartService } from '../../../services/cart.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleComponent } from '../../shared/title/title.component';
import { OrderItemsListComponent } from '../../shared/order-items-list/order-items-list.component';
import { MapComponent } from '../../shared/map/map.component';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [TitleComponent, ReactiveFormsModule, FormsModule, OrderItemsListComponent, MapComponent],
  providers:[CartService, UserService,OrderService],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
order:Order= new Order();
checkoutForm!: FormGroup;
constructor(cartService:CartService,private userService:UserService, private formBuilder:FormBuilder,private toastrService: ToastrService, private orderService: OrderService, private router:Router){
  if(cartService.Cart){
    this.order.items = cartService.Cart.items;
    this.order.totalPrice = cartService.Cart.totalPrice;
  }

}
ngOnInit(): void {
  if(this.userService.CurrentUser){
    let {name, address} = this.userService.CurrentUser
    this.checkoutForm = this.formBuilder.group({
      name:[name , Validators.required],
      address:[address , Validators.required]
    })
  }
}
get fc(){
  return this.checkoutForm.controls;
}
createOrder(){
if(this.checkoutForm.invalid){
  this.toastrService.warning("Please fill the inputs", 'Invalid Inputs')
  return;
}
if(!this.order.addressLatLng){
  this.toastrService.warning("Please select your location on the map", 'Location')
  return;
}

this.order.name = this.fc.name.value;
this.order.address = this.fc.address.value;

this.orderService.create(this.order).subscribe({
  next:() => {
    this.router.navigateByUrl('/payment');
  },
  error:(errorResponse) => {
    this.toastrService.error(errorResponse.error, 'Cart');
  }
})

}
}
