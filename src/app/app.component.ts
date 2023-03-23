import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title *ngIf="!destruir"></app-title>
    <button (click)="destruirCompo()">Destruir Componente</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit{
  
  public destruir: boolean = false;

  contructor() {}

  ngOnInit(): void {}

  public destruirCompo(){
    this.destruir = true;
  }
}
