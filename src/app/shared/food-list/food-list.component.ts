import { Component, OnInit } from '@angular/core';
import {FoodListService} from "../../services/food-list.service";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {

  public foodList: Array<string> = [];

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodList = this.foodListService.foodList();
  }
}