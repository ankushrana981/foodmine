import { Component, OnInit } from '@angular/core';
import { Food } from '../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CurrencyPipe, NgForOf } from '@angular/common';
import { StarRatingConfigService, StarRatingModule } from 'angular-star-rating';
import { SearchComponent } from '../../shared/search/search.component';
import { TagsComponent } from '../../shared/tags/tags.component';
import { NotFoundComponent } from '../../shared/not-found/not-found.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NgForOf, StarRatingModule, CurrencyPipe, SearchComponent, TagsComponent, NotFoundComponent],
  providers: [StarRatingConfigService, FoodService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  foods: Food[] = []

  constructor(private service: FoodService, route: ActivatedRoute) {
    route.params.subscribe(param => {
      let foodObservable: Observable<Food[]>;
      if (param.searchTerm) {
        foodObservable = this.service.getAllFoodAfterFilter(param.searchTerm)
      } else if (param.tag) {
        console.log(param.tag)
        foodObservable = this.service.getAllFoodByTag(param.tag)
        console.log(this.foods, "foods")
      }
      else {
        foodObservable = service.getAll()
      }
      foodObservable.subscribe(food => {
        this.foods = food;
      })
    })
  }

  ngOnInit(): void {

  }


}
