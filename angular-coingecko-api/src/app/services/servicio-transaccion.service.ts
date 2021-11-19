import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicioTransaccionService {
  @Output() disparadorTransacciones: EventEmitter<any>= new EventEmitter<any>();
  constructor() { }
}
