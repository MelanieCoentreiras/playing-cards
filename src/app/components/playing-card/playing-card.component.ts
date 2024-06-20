import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.css'],
})
export class PlayingCardComponent {
  // je définis les propriétés de mon composant
  @Input() name: string = 'My monster';
  @Input() hp: number = 40;
  @Input() figureCaption: string = 'N°001 Monster';
  @Input() attackName: string = 'Geo Impact';
  @Input() attackStrength: number = 60;
  @Input() attackDescription: string = 'This is a long description';
}
