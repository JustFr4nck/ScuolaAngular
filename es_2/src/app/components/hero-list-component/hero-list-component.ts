import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroCardComponent } from '../hero-card-component/hero-card-component';
import { Hero } from '../../models/hero.model';
import { HeroEdit } from '../hero-edit/hero-edit';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-hero-list-component',
  imports: [CommonModule, HeroCardComponent, HeroEdit],
  templateUrl: './hero-list-component.html',
  styleUrl: './hero-list-component.css',
})
export class HeroListComponent {
  totalCompleted = 0;

  heroChoose: Hero = {} as Hero;;


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

  addMission(hero: Hero) {
    if (Object.keys(hero).length === 0) {
      return;
    }
    for (let i = 0; i < this.heroes.length; i++) {

      if (hero.id === this.heroes[i].id) {
        this.heroes[i] = hero;
        return;
      }
    }
    this.heroes.push(hero);
  }
}
