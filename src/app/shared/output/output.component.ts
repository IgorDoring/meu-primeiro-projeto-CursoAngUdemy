import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  @Output() public enviarDados = new EventEmitter();
  public list: Array<{nome: string, idade: number}> = [
    {nome: "Igor", idade: 22},
    {nome: "Igor D", idade: 17},
    {nome: "Igor Dor", idade: 34}
  ]

  getDados(event: number){
    this.enviarDados.emit(this.list[event]);
  }
}
