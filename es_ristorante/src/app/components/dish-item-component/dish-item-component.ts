import { CommonModule } from '@angular/common';
import { Piatto } from './../../models/piatto.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dish-item-component',
  imports: [CommonModule],
  templateUrl: './dish-item-component.html',
  styleUrl: './dish-item-component.css',
})
export class DishItemComponent {

  @Input() piatto : Piatto = {} as Piatto;
  @Output() cambioQuantita = new EventEmitter<number>();


  modifica(valore: number) {
  this.cambioQuantita.emit(valore);
  }

}
