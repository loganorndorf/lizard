import { ItemEntry } from '../models/itemEntry';
import { Item } from '../interfaces/Item';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  _urlItem = 'http://localhost:3000/item';

  constructor(private _http: HttpClient) { }

  add(item: ItemEntry) {
    return this._http.post<any>(this._urlItem, item);
  }

  delete(item: ItemEntry) {
    return this._http.delete<any>(`${this._urlItem}/${item.url}`); 
  }

  getAll(): Observable<Item[]> {
    const items = this._http.get<Item[]>(this._urlItem);
    return items;
  }
}
