import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent {
  //ngIf 
  condition: boolean = true;
  changeCondition():void{
    this.condition = !this.condition;
  }

  // ngFor
  list: Array<{nome:string, descricao:string}> = [
    {nome: "item 1", descricao: "desc 1"}, 
    {nome: "item 2", descricao: "desc 2"}, 
    {nome: "item 3", descricao: "desc 3"}, 
    {nome: "item 4", descricao: "desc 4"}, 
  ]

  onClickAddList(): void{
    this.list.push({nome: "item x", descricao: "desc x"});
  }

  onClickEvent(event: number): void{
    this.list.splice(event, 1);
  }

  // ngSwitch
  nome: string = "placeholder";

}
 