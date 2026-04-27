import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishItemComponent } from "../dish-item-component/dish-item-component";
import { Piatto } from '../../models/piatto.model';

@Component({
  selector: 'app-menu-component',
  standalone: true,
  imports: [DishItemComponent, CommonModule],
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  piatti: Piatto[] = [
    { id: 1, nome: 'Pizza Margherita', prezzo: 8, quantita: 0 },
    { id: 2, nome: 'Carbonara', prezzo: 12, quantita: 2 },
    { id: 3, nome: 'Tiramisù', prezzo: 6, quantita: 0 },
  ];

  totale = 0;

  aggiornaOrdine(variazione: number, piatto: Piatto) {
    piatto.quantita += variazione;

    this.totale = this.piatti.reduce((acc, p) => acc + (p.quantita * p.prezzo), 0);
  }
}
