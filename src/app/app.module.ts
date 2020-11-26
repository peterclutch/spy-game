import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './core/layout/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ManagerComponent } from './module/manager/manager.component';
import { PlayerPickerComponent } from './module/step/player-picker/player-picker.component';
import { WordDisplayComponent } from './module/step/word-display/word-display.component';
import { EliminationComponent } from './module/step/elimination/elimination.component';
import { TitleComponent } from './module/step/title/title.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RulesComponent } from './module/step/title/rules/rules.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { WordDisplayItemComponent } from './module/step/word-display/word-display-item/word-display-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    MainComponent,
    ManagerComponent,
    PlayerPickerComponent,
    WordDisplayComponent,
    EliminationComponent,
    TitleComponent,
    RulesComponent,
    WordDisplayItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
