import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Game } from '../../../../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() game!: Game;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewInventory(): void {
    this.router.navigate(['inventory', this.game.id]);
  }
}
