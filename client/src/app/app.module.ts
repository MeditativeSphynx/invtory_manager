import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/routes/game-list/game/game.component';
import { GameListComponent } from './components/routes/game-list/game-list.component';
import { InventoryComponent } from './components/routes/inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameListComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
