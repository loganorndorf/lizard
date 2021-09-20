import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  _urlToggle: string = 'http://localhost:3000/toggle';

  constructor(private _http:HttpClient) { }

  // toggle the monitor
  toggle(monitorState: String) {
    return this._http.post<any>(this._urlToggle, {monitorState: monitorState});
  }
}
