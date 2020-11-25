import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'spy-elimination',
  templateUrl: './elimination.component.html',
  styleUrls: ['./elimination.component.scss']
})
export class EliminationComponent implements OnChanges {
  @Input() players: string[];
  @Input() spy: string;

  @Output() newGameEmitter = new EventEmitter<void>();

  playerStatusList: [string, boolean][]; // List[playerName, isDead]

  kill(playerStatus: [string, boolean]): void {
    playerStatus[1] = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.playerStatusList = changes.players?.currentValue.map(player => [player, true]);
  }

  reset(): void {
    this.newGameEmitter.emit();
  }

}
