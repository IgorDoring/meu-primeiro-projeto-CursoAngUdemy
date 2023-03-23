import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges{

  @Input() public title:string = "Hello World!";

  ngOnInit(): void{ }

  ngOnChanges(): void{ 
    console.log("New Data");
  }

}
