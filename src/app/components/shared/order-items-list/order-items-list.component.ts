import { Component, Input } from '@angular/core';
import { Order } from '../models/order';
import { CurrencyPipe, NgForOf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'order-items-list',
  standalone: true,
  imports: [CurrencyPipe, RouterModule, NgForOf],
  templateUrl: './order-items-list.component.html',
  styleUrl: './order-items-list.component.css'
})
export class OrderItemsListComponent {
  @Input() order!: Order;
  constructor(){
  }
}
