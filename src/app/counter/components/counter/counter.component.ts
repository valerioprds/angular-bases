//import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
//import {AppComponent } from '@AppComponent'

@Component({
  selector: 'app-counter',
  template: `<h3>Counter : {{ counter }}</h3>

  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter(10)">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>`
})

export class CounterComponent  {
  public title: string = 'HOLA MUNDO';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter = this.counter + value;
  }

  resetCounter (value : number) {
    this.counter = value
  }

}
