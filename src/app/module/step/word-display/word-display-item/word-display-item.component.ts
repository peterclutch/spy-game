import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'spy-word-display-item',
  templateUrl: './word-display-item.component.html',
  styleUrls: ['./word-display-item.component.scss'],
  animations: [
    trigger('enterWord', [
      state('in', style({ opacity: 1, width: 'fit-content' })),
      transition(':enter', [
        style({ opacity: 0, width: 0 }),
        animate('250ms ease-in')
      ])
    ])
  ]
})
export class WordDisplayItemComponent {
  @Input() player: string;
  @Input() spy: boolean;
  @Input() words: [string, string];

  show = false;

  showWord() {
    this.show = true;
  }

}
