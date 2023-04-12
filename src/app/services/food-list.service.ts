import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = ["X Bacon", "Cachorro Quente", "Pizza"];

  constructor() { }

  public foodList(){
    return this.list;
  }
}
