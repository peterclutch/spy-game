import { Component } from '@angular/core';
import { WordService } from '../../service/word.service';

export enum GameStep {
  Title = 0,
  PlayerPicker = 1,
  WordDisplay = 2,
  Elimination = 3,
}

@Component({
  selector: 'spy-manager',
  templateUrl: './manager.component.html'
})
export class ManagerComponent {
  GameStep = GameStep;
  currentStep = GameStep.Title;

  players: string[] = [];
  spy: string;
  words: [string, string];

  constructor(
    private wordService: WordService
  ) { }

  initGame(players: string[]) {
    this.players = players;
    this.spy = this.players[Math.floor(Math.random() * this.players.length)];
    this.words = this.wordService.getRandomWordTuple();
    this.nextPage();
  }

  newGame() {
    this.currentStep = GameStep.PlayerPicker;
  }

  nextPage() {
    this.currentStep++;
  }
}
