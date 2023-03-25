import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent {

  valor: boolean = true;
  changeValor(valor: boolean):void{
    this.valor = !this.valor;
  }

}
