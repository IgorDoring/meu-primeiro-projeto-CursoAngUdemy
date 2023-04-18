import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--<app-input [contador]="addValue"></app-input>
  <button (click)="add()" >Add</button>
  <hr><br>
  <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h2>{{getDados.idade}}</h2>
  </ng-template>
  <app-output (enviarDados)="setDados($event)"></app-output> -->

    <app-formulario></app-formulario>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit{

  public addValue: number = 0;
  public getDados: {nome: string, idade: number} | undefined;

  add():void{
    this.addValue += 1;
  }

  contructor() {}

  ngOnInit(): void {}

  public setDados(event: {nome: string, idade: number}){
    this.getDados = event;
  }
}
