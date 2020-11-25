import { Component, Input } from '@angular/core';

@Component({
  selector: 'spy-word-display-item',
  templateUrl: './word-display-item.component.html',
  styleUrls: ['./word-display-item.component.scss']
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
