import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title title="New Value"></app-title>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit{
  contructor() {}

  ngOnInit(): void {}

}
