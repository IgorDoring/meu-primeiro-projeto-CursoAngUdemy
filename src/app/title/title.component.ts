import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent{

  public title:string = "Hello World!";

  ngOnInit(): void{
    console.log("Title Component Initialiazed");
  }

  ngOnChanges(): void{ 
    console.log("Title New Data");
  }

  ngOnDestroy(): void{
    console.log("Title component Destroyed");
  }
}
