import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] 
})
export class App {
  emma: string = "amo emma";
  isBlocked = false;

  bloccaButton(): void {

    this.isBlocked = true;
 
    setTimeout(() => {
      this.isBlocked = false;
    }, 3000); 
  }
}
