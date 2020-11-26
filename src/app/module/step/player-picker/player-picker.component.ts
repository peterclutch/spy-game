import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'spy-player-picker',
  templateUrl: './player-picker.component.html',
  styleUrls: ['./player-picker.component.scss']
})
export class PlayerPickerComponent implements OnInit {
  playerFormGroup: FormGroup;
  playerFormArray: FormArray;

  @Output() nextStepEmitter = new EventEmitter<string[]>();

  private static getPlayerFormGroup(name?: string): FormGroup {
    return new FormGroup({
      player: new FormControl(name || '', [
        Validators.required,
        Validators.minLength(2),
        RxwebValidators.unique()
      ])
    });
  }

  ngOnInit(): void {
    this.playerFormArray = new FormArray(
      [
        PlayerPickerComponent.getPlayerFormGroup(),
        PlayerPickerComponent.getPlayerFormGroup(),
        PlayerPickerComponent.getPlayerFormGroup()
      ],
      [Validators.minLength(3)]
    );

    this.playerFormGroup = new FormGroup({
      players: this.playerFormArray
    });
  }

  addPlayer(formArray: FormArray) {
    formArray.push(PlayerPickerComponent.getPlayerFormGroup());
  }

  removePlayer(formArray: FormArray) {
    if (formArray.length > 3) {
      formArray.removeAt(formArray.length - 1);
    }
  }

  submit(): void {
    const players = this.playerFormGroup.value.players.map(o => o.player);
    this.nextStepEmitter.emit(players);
  }

}
