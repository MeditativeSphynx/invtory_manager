import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameCardComponent } from './components/routes/game-list/game-card/game-card.component';
import { GameListComponent } from './components/routes/game-list/game-list.component';
import { InventoryComponent } from './components/routes/inventory/inventory.component';
import { TopNavComponent } from './components/shared/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCardComponent,
    GameListComponent,
    InventoryComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
