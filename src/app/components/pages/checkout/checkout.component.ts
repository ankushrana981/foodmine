import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/models/order';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
order:Order= new Order();
constructor(){

}
ngOnInit(): void {
  
}
}
