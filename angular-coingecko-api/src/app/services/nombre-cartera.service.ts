import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NombreCarteraService {
  @Output() disparadorNombre: EventEmitter<any>= new EventEmitter();
  constructor() { }
}
