import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrecioTotalService {
  @Output() disparadorTotal: EventEmitter<any>= new EventEmitter();
  constructor() { }
}
