import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CurrencyPipe, NgForOf, NgIf } from '@angular/common';
import { StarRatingConfigService, StarRatingModule } from 'angular-star-rating';
import { CartService } from '../../../services/cart.service';
import { NotFoundComponent } from '../../shared/not-found/not-found.component';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CurrencyPipe, RouterModule, StarRatingModule, NgIf, NgForOf,NotFoundComponent],
  providers:[FoodService,StarRatingConfigService,CartService],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food:any;
  constructor(private route: ActivatedRoute, private service:FoodService
    ,private cartService:CartService , private router: Router) {
    this.route.params.subscribe(params=>{
    this.service.getFoodById(params.id).subscribe(food=>{
      this.food =food
    })
    })
  }
  addToCart(){
    this.cartService.addTocart(this.food)
    this.router.navigateByUrl('/cart-page');
  }
}
