import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EliminarTransaccionService {
  @Output() disparadorEliminarTransaccion: EventEmitter<any>= new EventEmitter();

  constructor() { }
}
