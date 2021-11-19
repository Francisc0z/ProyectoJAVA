import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicioCarterasService {
  @Output() disparadorDeCarteras: EventEmitter<any>= new EventEmitter();
  constructor() { }
}
