import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroCardComponent } from './components/hero-card-component/hero-card-component';
import { Hero } from './models/hero.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeroCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  totalCompleted = 0;

  heroes: Hero[] = [
    {
      id: 1,
      nome: 'Spider-Man',
      potere: 'Senso di ragno e ragnatele',
      completata: false
    },
    {
      id: 2,
      nome: 'Iron Man',
      potere: 'Armatura tecnologica avanzata',
      completata: false
    },
    {
      id: 3,
      nome: 'Wonder Woman',
      potere: 'Super forza e lazo della verità',
      completata: false
    },
    {
      id: 4,
      nome: 'Doctor Strange',
      potere: 'Arti mistiche e manipolazione del tempo',
      completata: false
    },
    {
      id: 5,
      nome: 'Black Widow',
      potere: 'Combattimento corpo a corpo e spionaggio',
      completata: true
    }
  ];

  markAsDone(hero: Hero) {

    hero.completata = true;
    const completed: Hero[] = this.heroes.filter((hero) => hero.completata);
    this.totalCompleted = completed.length;

  }
}
