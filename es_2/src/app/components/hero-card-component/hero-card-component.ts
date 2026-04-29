import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hero-card-component',
  imports: [],
  templateUrl: './hero-card-component.html',
  styleUrl: './hero-card-component.css',
})
export class HeroCardComponent {

  constructor(private router: Router){};

  @Input() hero!: Hero;
  @Output() onMissionDone = new EventEmitter<Hero>();
  

  notifyParent() {

    this.onMissionDone.emit(this.hero);
  }

 goToModify() {
    if (this.hero && this.hero.id) {
      this.router.navigate([`/edit`, this.hero.id]);
    }
  }
}
