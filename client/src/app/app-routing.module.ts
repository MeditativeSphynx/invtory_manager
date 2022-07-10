import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameListComponent } from './components/routes/game-list/game-list.component';
import { InventoryComponent } from './components/routes/inventory/inventory.component';

const routes: Routes = [
  {
    path: '',
    component: GameListComponent
  },
  {
    path: 'inventory/:id',
    component: InventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
