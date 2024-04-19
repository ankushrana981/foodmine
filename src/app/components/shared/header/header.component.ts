import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf],
  providers:[CartService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
cardQuantity:number= 0;
constructor(cardService:CartService) {
cardService.getCartObservable().subscribe((newCart)=>{
 return this.cardQuantity = newCart.items.length;
})
}
ngOnInit() {}
}
