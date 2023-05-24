import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {

  nombre='paul'
  a=50
  b=0
  r=0

  suma() {
    console.log('hello Ups ' + this.a);
    this.r = 0 + this.a + eval('' + this.b);
  }

  items=['paul', 'andres']
  
  addItem(newItem: string) {
    this.items.push(newItem);
  }


}
