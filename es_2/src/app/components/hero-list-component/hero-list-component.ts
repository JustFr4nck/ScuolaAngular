import { HeroListaServ } from './../../services/hero-lista-serv';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, Signal } from '@angular/core';
import { HeroCardComponent } from '../hero-card-component/hero-card-component';
import { Hero } from '../../models/hero.model';
import { HeroEdit } from '../hero-edit/hero-edit';
import { isEmpty } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-hero-list-component',
  imports: [CommonModule, HeroCardComponent, HeroEdit],
  templateUrl: './hero-list-component.html',
  styleUrl: './hero-list-component.css',
})
export class HeroListComponent {
  totalCompleted = 0;
  heroes: Signal<Hero[]>;

  heroChoose: Hero = {} as Hero;

  constructor(private heroLista: HeroListaServ) {
    this.heroes = toSignal(this.heroLista.getLista(), { initialValue: [] });
  }


  markAsDone(hero: Hero) {

    hero.completata = true;
    const completed: Hero[] = this.heroes().filter((hero) => hero.completata);
    this.totalCompleted = completed.length;

  }


}
