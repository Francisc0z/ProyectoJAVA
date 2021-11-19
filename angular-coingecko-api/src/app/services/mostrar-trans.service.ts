import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarTransService {
  @Output() disparadorMostrar: EventEmitter<any>= new EventEmitter();
  constructor() { }
}
