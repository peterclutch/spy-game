import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ManagerComponent } from './module/manager/manager.component';

const routes: Routes = [
  { path: '', component: ManagerComponent},
  { path: '**', redirectTo: ''}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
