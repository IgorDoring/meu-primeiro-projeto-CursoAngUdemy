import { Component, OnInit } from '@angular/core';
import {FoodListService} from "../../services/food-list.service";
import {FoodList} from "../../module/food-list";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {

  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      res => this.foodList = res,
      error => console.log(error)
    );

    this.foodListService.emitEvent.subscribe({
      next: (res:any) => {
        alert("Add "+res.nome);
        return this.foodList.push(res);
      },
      error: (err:any) => console.log(err)
    });
  }

  public foodListDelete(id: number){
    return this.foodListService.foodListDelete(id).subscribe(
      res => {
        this.foodList = this.foodList.filter(
          item => {
            return id !== item.id
          }
        )
      }
    )
  }

  public foodListEdit(id: number, value: string){
    return this.foodListService.foodListEdit(id,value).subscribe(
      res => {
        return console.log(res)
      }
    )
  }

}
