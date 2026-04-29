import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Hero } from "../../models/hero.model";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { HeroListaServ } from "../../services/hero-lista-serv";
import { Router } from '@angular/router';

@Component({
  selector: "app-hero-edit",
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: "./hero-edit.html",
  styleUrl: "./hero-edit.css",
})
export class HeroEdit {

  heroId: number | undefined;
  hero: Hero = {} as Hero;
  @Output() newHeroAdded = new EventEmitter<Hero>();

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroListaServ,
    private router: Router
  ) { }

  ngOnInit() {

    if (this.heroId) {

      this.heroService.updateHero(this.hero.id, this.hero).subscribe({
        next: () => {
          console.log("Hero aggiornato")
        },
        error: (err) => console.error('Errore nell\'aggiornamento prodotto', err)
      });

    }
  }

  sendHero() {
    if (!this.hero.id) {

      this.heroService.addMission(this.hero).subscribe({
        next: (newHero) => {
          console.log('Eroe aggiunto con successo:', newHero);

          this.newHeroAdded.emit(newHero);

          this.router.navigate(['/']);
        },
        error: (err) => console.error('Errore durante l\'invio:', err)
      });
    } else {

      this.router.navigate(['/']);
    }


  }


}


