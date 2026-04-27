import { Injectable } from "@angular/core";
import { Hero } from "../models/hero.model";

@Injectable({
  providedIn: "root",
})
export class HeroListaServ {

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

  getLista(){
    return this.heroes;
  }

  get(id: number): Hero {
    let h: Hero | undefined = this.heroes.find(h => h.id == id);
    if (!h) {
      h = {} as Hero;
    }
    return h;
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
    this.heroes.push({... hero});
  }

}
