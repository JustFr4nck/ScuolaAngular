import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Hero } from "../../models/hero.model";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-hero-edit",
  imports: [CommonModule, FormsModule],
  templateUrl: "./hero-edit.html",
  styleUrl: "./hero-edit.css",
})
export class HeroEdit {

  @Input() hero: Hero = {} as Hero;
  @Output() newHeroAdded = new EventEmitter<Hero>();

  

  sendHero() {

    this.newHeroAdded.emit({ ...this.hero });
    this.hero = {} as Hero;

  }

  


}
