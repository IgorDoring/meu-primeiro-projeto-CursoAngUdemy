import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent {
  // ngClass
  valor: boolean = true;
  changeValor(valor: boolean):void{
    this.valor = !this.valor;
  }

  // ngStyle
  paraHeight: number = 20;
  ngOnInit(): void{
    setInterval(()=>{
      if(this.paraHeight < 50){
        this.paraHeight += 2;
      }else{
        this.paraHeight = 20;
      }
    }, 100);
  }
}
