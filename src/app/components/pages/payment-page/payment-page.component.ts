import { Component } from '@angular/core';
import { Order } from '../../shared/models/order';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';
import { OrderItemsListComponent } from '../../shared/order-items-list/order-items-list.component';
import { TitleComponent } from '../../shared/title/title.component';
import { MapComponent } from '../../shared/map/map.component';


@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [OrderItemsListComponent, TitleComponent, MapComponent],
  providers: [OrderService],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.css'
})
export class PaymentPageComponent {

  order: Order = new Order();
  constructor(private orderService: OrderService, router: Router) {
    this.orderService.getNewOrderForCurrentUser().subscribe({
      next: (order) => {
        this.order = order;
      }, error: () => {
        router.navigateByUrl('/checkout')
      }
    })
  }
}
