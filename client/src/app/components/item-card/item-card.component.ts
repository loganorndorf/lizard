import { Component, OnInit, Input } from '@angular/core';
import { ItemInfoModel } from '../../models/ItemInfoModel';
import { Item } from '../../interfaces/Item';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() item: Item;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
