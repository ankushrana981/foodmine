import { Component } from '@angular/core';
import { Tag } from '../models/tag';
import { FoodService } from '../../../services/food.service';
import { NgForOf, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [NgForOf, NgIf, RouterModule],
  providers:[FoodService],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  tags: Tag[] = [];
  constructor(private foodservice: FoodService){
    let tagsObservable: Observable<Tag[]>;
    tagsObservable = this.foodservice.getAllTags();
    tagsObservable.subscribe(tags => {
      this.tags = tags;
    });
  }
}
