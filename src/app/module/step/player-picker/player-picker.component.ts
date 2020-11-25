import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'spy-player-picker',
  templateUrl: './player-picker.component.html',
  styleUrls: ['./player-picker.component.scss']
})
export class PlayerPickerComponent implements OnInit {
  playerFormGroup: FormGroup;
  playerFormArray: FormArray;

  @Output() nextStepEmitter = new EventEmitter<string[]>();

  ngOnInit(): void {
    this.playerFormArray = new FormArray(
      [new FormGroup({
        player: new FormControl('', [Validators.required])
      })],
      Validators.minLength(3)
    );

    this.playerFormGroup = new FormGroup({
      players: this.playerFormArray
    });
  }

  addPlayer(formArray: FormArray) {
    formArray.push(
      new FormGroup({
        player: new FormControl('', [Validators.required])
      })
    );
  }

  removePlayer(formArray: FormArray) {
    if (formArray.length > 1) {
      formArray.removeAt(formArray.length - 1);
    }
  }

  submit(): void {
    const players = this.playerFormGroup.value.players.map(o => o.player);
    this.nextStepEmitter.emit(players);
  }

}
