import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'spy-word-display',
  templateUrl: './word-display.component.html',
  styleUrls: ['./word-display.component.scss']
})
export class WordDisplayComponent {
  @Input() players: string[];
  @Input() spy: string;
  @Input() words: [string, string];

  @Output() nextStepEmitter = new EventEmitter<void>();

  playerViewIndex = 0;

  next(): void {
    if (this.hasNext()) {
      this.playerViewIndex++;
    }
  }

  previous(): void {
    if (this.hasPrevious()) {
      this.playerViewIndex--;
    }
  }

  begin(): void {
    this.nextStepEmitter.emit();
    this.playerViewIndex = 0;
  }

  hasNext(): boolean {
    return this.playerViewIndex < this.players?.length - 1;
  }

  hasPrevious(): boolean {
    return this.playerViewIndex > 0;
  }

}
