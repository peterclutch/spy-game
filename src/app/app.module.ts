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

@NgModule({
  declarations: [
    MainComponent,
    ManagerComponent,
    PlayerPickerComponent,
    WordDisplayComponent,
    EliminationComponent,
    TitleComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
