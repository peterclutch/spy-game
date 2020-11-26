import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

export enum EliminationStep {
  InProgress = 0,
  SpyRevealed = 1,
  SpyWon = 2
}

@Component({
  selector: 'spy-elimination',
  templateUrl: './elimination.component.html',
  styleUrls: ['./elimination.component.scss']
})
export class EliminationComponent implements OnChanges {
  @Input() players: string[];
  @Input() spy: string;

  @Output() newGameEmitter = new EventEmitter<void>();

  playerStatusList: [string, boolean][]; // List[playerName, isEliminated]
  currentStep = EliminationStep.InProgress;
  EliminationStep = EliminationStep;

  reveal(playerStatus: [string, boolean]): void {
    if (this.currentStep !== EliminationStep.InProgress) {
      return;
    }

    playerStatus[1] = true;

    if (playerStatus[0] === this.spy) {
      this.currentStep = EliminationStep.SpyRevealed;
    } else if (this.playerStatusList.filter(player => player[1] === false).length <= 2) {
      this.currentStep = EliminationStep.SpyWon;
      this.revealSpy();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.playerStatusList = changes.players?.currentValue.map(player => [player, false]);
    this.currentStep = EliminationStep.InProgress;
  }

  newGame(): void {
    this.newGameEmitter.emit();
  }

  private revealSpy() {
    const spyPlayer = this.playerStatusList.filter(player => player[0] === this.spy)[0];
    spyPlayer[1] = true;
  }

}
