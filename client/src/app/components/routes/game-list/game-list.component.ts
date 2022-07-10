import { Component, OnInit } from '@angular/core';

import { Game } from '../../../models/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  games: Game[] = [
    {
      id: 1,
      name: "Escape from Tarkov",
      uniqueItems: 0,
      totalItems: 0,
      totalWeight: 0,
      totalValue: 0
    },
    {
      id: 2,
      name: "The Cycle",
      uniqueItems: 0,
      totalItems: 0,
      totalWeight: 0,
      totalValue: 0
    },
    {
      id: 3,
      name: "Project Zomboid",
      uniqueItems: 0,
      totalItems: 0,
      totalWeight: 0,
      totalValue: 0
    },
    {
      id: 4,
      name: "New World",
      uniqueItems: 0,
      totalItems: 0,
      totalWeight: 0,
      totalValue: 0
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
