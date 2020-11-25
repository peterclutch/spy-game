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
    if (this.showNext()) {
      this.playerViewIndex++;
    }
  }

  previous(): void {
    if (this.showPrevious()) {
      this.playerViewIndex--;
    }
  }

  begin(): void {
    this.nextStepEmitter.emit();
    this.playerViewIndex = 0;
  }

  showNext(): boolean {
    return this.playerViewIndex < this.players?.length - 1;
  }

  showPrevious(): boolean {
    return this.playerViewIndex > 0;
  }

  showBegin(): boolean {
    return this.playerViewIndex === this.players?.length - 1;
  }

}
