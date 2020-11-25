import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'spy-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent{
  @Output() nextStepEmitter = new EventEmitter<string[]>();

  begin() {
    this.nextStepEmitter.emit();
  }

}
