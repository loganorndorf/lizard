import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemEntry } from '../../models/itemEntry';
import { Item } from '../../interfaces/Item';
import { ItemService } from '../../services/item.service';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  // models
  itemModel: ItemEntry = new ItemEntry("");

  totalItems: number = 0;
  monitorOnState: boolean = false;

  // Event Emitters
  @Output() setMonitorOnState = new EventEmitter<boolean>();
  @Output() addNewItem = new EventEmitter<Item>();
  

  constructor(
    private _itemService: ItemService, 
    private _toggleService: ToggleService
  ) {}

  ngOnInit(){}

  setTotalItems(initValue: number) {
    this.totalItems = initValue;
  }

  addItem(){
    this.totalItems++;
    this._itemService.add(this.itemModel)
      .subscribe(
        data => {
          this.addNewItem.emit(data);
        },
        error => console.error('Error!', error)
      )

    this.itemModel.url = "";
  }

  toggleMonitor(element: any) {
    const originalState: string = element.textContent;

    this.monitorOnState = !this.monitorOnState;
    this.setMonitorOnState.emit(this.monitorOnState);
    
    element.textContent = this.monitorOnState ? "Stop" : "Start";

    // TODO: find a better, cleaner way to change the button styles
    document.getElementById("toggle")?.classList.toggle("btn-success");
    document.getElementById("toggle")?.classList.toggle("btn-danger");

    
    this._toggleService.toggle(originalState)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      )
  }

}
