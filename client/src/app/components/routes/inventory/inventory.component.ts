import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  items: Item[] = [
    {
      id: 1,
      name: 'Metal Bar',
      weight: 0,
      inventorySpace: 0,
      value: 0,
      category: 'Weapon',
      subcategory: '',
      count: 0
    },
    {
      id: 2,
      name: 'ValuTech Walkie Talkie',
      weight: 0,
      inventorySpace: 0,
      value: 0,
      category: 'Communications',
      subcategory: '',
      count: 0
    },
    {
      id: 3,
      name: 'Can Opener',
      weight: 0,
      inventorySpace: 0,
      value: 0,
      category: 'Cooking',
      subcategory: '',
      count: 0
    },
    {
      id: 4,
      name: 'Chips',
      weight: 0,
      inventorySpace: 0,
      value: 0,
      category: 'Food',
      subcategory: '',
      count: 4
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
