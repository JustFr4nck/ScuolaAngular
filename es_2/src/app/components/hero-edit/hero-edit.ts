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

  constructor (
    private route: ActivatedRoute, 
    private heroService: HeroListaServ,
    private router: Router 
  ) {} 
  
  ngOnInit() {
    this.heroId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.heroId) {
      // Usiamo lo spread operator {...} per non modificare l'originale nel servizio per riferimento
      this.hero = { ...this.heroService.get(this.heroId) };
    }
  }

  sendHero() {
    if (!this.heroId) {
     
      this.heroService.addMission(this.hero);
    }
  
    this.router.navigate(['/']); 
  }

  
}

  



