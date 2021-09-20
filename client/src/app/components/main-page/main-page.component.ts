import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/Item';
import { ItemService } from 'src/app/services/item.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  monitorOnState: boolean = false;
  items: Item[] = [];

  constructor(private _itemService: ItemService) { }

  ngOnInit(): void {
    this._itemService.getAll().subscribe({
      next: items =>  {
        this.items = items;
      }
    });
  }

  setMonitorOnState(state: boolean) {
    this.monitorOnState = state;
  }

  addNewItem(newItem: Item) {
    this.items.push(newItem);
  }

}
