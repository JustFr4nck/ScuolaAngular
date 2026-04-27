import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Hero } from "../../models/hero.model";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { HeroListaServ } from "../../services/hero-lista-serv";

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

  constructor (private route: ActivatedRoute, private heroService: HeroListaServ){}
  
  ngOnInit() {
    this.heroId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID Prodotto (snapshot):', this.heroId);
    if (this.heroId) {
      this.hero = {... this.heroService.get(this.heroId)};
    }
  }

 sendHero() {
    if (!this.heroId) {
      this.heroService.addMission(this.hero);
    }
 
  }

  


}
