import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{ valor }}
    <button (click)="adicionar()">Adicionar</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit{
  public valor: number = 1;

  public adicionar(): number{
    return this.valor += 1;
  }

  contructor() {}

  ngOnInit(): void {
    this.valor = 0;
  }

  ngDoCheck(): void{
    console.log("ngDoCheck")
  }

  ngAfterContentInit(): void{
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void{
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(): void{
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(): void{
    console.log("ngAfterViewChecked")
  }
}
