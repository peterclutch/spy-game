import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RulesComponent } from './rules/rules.component';

@Component({
  selector: 'spy-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent{
  @Output() nextStepEmitter = new EventEmitter<string[]>();

  constructor(public dialog: MatDialog) {
  }

  begin() {
    this.nextStepEmitter.emit();
  }

  openRules(): void {
    this.dialog.open(RulesComponent);
  }

}
