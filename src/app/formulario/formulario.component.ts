import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  public foods = ["X-Salada", "X-Frango", "X-Bacon", "X-Coração"];

  public enviarDados(form: NgForm){
    console.log(form.value);
  }
}
