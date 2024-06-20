import { Component } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  monster1!: Monster;

  constructor() {
    this.monster1 = new Monster();
    // son nom ça sera monster 1 .name = à pik
    this.monster1.name = 'Pik';
    this.monster1.hp = 50;
    this.monster1.figureCaption = 'N°002 Monster';
    this.monster1.attackName = 'Fire Blast';
  }
}
