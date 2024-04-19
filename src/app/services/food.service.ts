import { Injectable } from '@angular/core';
import { Food } from '../components/shared/models/food';
import { food_samples, sample_tags } from '../../data';
import { Tag } from '../components/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[] {
    return food_samples;
  }
  getAllFoodAfterFilter(searchTerm:string){
   return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllFoodByTag(tag:string):Food[]{
    return tag === "All" ? 
    this.getAll() :
     this.getAll().filter(food => food.tags?.includes(tag));
  }

  getFoodById(id:string){
    return this.getAll().find(food => food.id === id)
  }
}
