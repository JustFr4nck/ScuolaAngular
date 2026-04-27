import { HeroListaServ } from './../../services/hero-lista-serv';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
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
export class HeroListComponent implements OnInit, AfterViewInit {
  totalCompleted = 0;
  heroes!: any[];

  heroChoose: Hero = {} as Hero;;

  constructor(private heroLista : HeroListaServ){
  }

  ngOnInit() {
    this.heroes = this.heroLista.getLista();
  }

  ngAfterViewInit(): void {
    
  }

  markAsDone(hero: Hero) {

    hero.completata = true;
    const completed: Hero[] = this.heroes.filter((hero) => hero.completata);
    this.totalCompleted = completed.length;

  }

  
}
