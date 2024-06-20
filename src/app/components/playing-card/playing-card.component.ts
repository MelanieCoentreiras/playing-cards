import { Component, Input } from '@angular/core';
import { Monster } from 'src/app/models/monster.model';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.css'],
})
export class PlayingCardComponent {
  // la variable va s'appeler monster
  // va être de type Monster (la classe qu'on a créée), que j'importe
  // et je l'assigne à un nouvel objet Monster (new Monster)
  @Input({
    alias: 'my-monster',
    transform: (value: Monster) => {
      value.hp = value.hp / 2;
      return value;
    },
  })
  monster: Monster = new Monster();
}

/* // Version InputSignal
export class PlayingCardComponent {
  @Input({
    alias: 'my-monster',
    transform: (value: Monster) => {
      value.hp = value.hp / 2;
      return value;
    },
  })
  monster: InputSignal<Monster> = Input(new Monster());
}
 */
