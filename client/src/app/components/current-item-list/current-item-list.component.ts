import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../interfaces/Item';

@Component({
  selector: 'app-current-item-list',
  templateUrl: './current-item-list.component.html',
  styleUrls: ['./current-item-list.component.css']
})
export class CurrentItemListComponent implements OnInit {
  @Input() itemList: Item[];

  constructor() {}

  ngOnInit(): void {

  }
}
