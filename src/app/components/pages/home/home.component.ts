import { Component, OnInit } from '@angular/core';
import { Food } from '../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CurrencyPipe, NgForOf } from '@angular/common';
import { StarRatingConfigService, StarRatingModule } from 'angular-star-rating';
import { SearchComponent } from '../../shared/search/search.component';
import { TagsComponent } from '../../shared/tags/tags.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NgForOf, StarRatingModule, CurrencyPipe, SearchComponent,TagsComponent],
  providers: [StarRatingConfigService, FoodService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  foods: Food[] = []

  constructor(private service: FoodService, private route: ActivatedRoute) {
    this.route.params.subscribe(param => {
      if (param.searchTerm) {
        this.foods = this.service.getAllFoodAfterFilter(param.searchTerm)
      } else if (param.tag){
        console.log(param.tag)
        this.foods = this.service.getAllFoodByTag(param.tag)
        console.log(this.foods,"foods")
      } 
      else {
        this.foods = service.getAll()
      }
    })
  }

  ngOnInit(): void {

  }


}
