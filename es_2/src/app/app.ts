
import { Component, signal } from '@angular/core';
import { HeroListComponent } from './components/hero-list-component/hero-list-component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroListComponent, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
