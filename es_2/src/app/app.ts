
import { Component, signal } from '@angular/core';
import { HeroListComponent } from './components/hero-list-component/hero-list-component';

@Component({
  selector: 'app-root',
  imports: [HeroListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
