import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Game } from '../../../../models/game';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() game!: Game;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewInventory(): void {
    this.router.navigate(['inventory', this.game.id]);
  }
}
