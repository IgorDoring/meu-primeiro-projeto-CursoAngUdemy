import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-diretivas-atributos><h1>Aulas de Diretiva Atributo</h1> <h3>Fim da Aula</h3></app-diretivas-atributos>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit{

  contructor() {}

  ngOnInit(): void {}

}
