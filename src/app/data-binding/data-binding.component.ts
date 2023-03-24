import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  /* Interpolation*/
  public nome: string = "Igor";
  public sobrenome: string = " Doring";
  public idade: number = 22;

  /* Property Binding*/
  public disabledCheck: boolean = true;
  public imgSrc: string = "https://www.unisinos.br/images/logos/unisinos-logo.svg"
}
