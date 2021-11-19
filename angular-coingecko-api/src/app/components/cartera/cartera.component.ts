import { Component, OnInit } from '@angular/core';
import { ServicioTransaccionService } from 'src/app/services/servicio-transaccion.service';
import { MostrarTransService } from 'src/app/services/mostrar-trans.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NombreCarteraService } from 'src/app/services/nombre-cartera.service';
import { EliminarTransaccionService } from 'src/app/services/eliminar-transaccion.service'
 

@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.component.html',
  styleUrls: ['./cartera.component.css']
})
export class CarteraComponent implements OnInit {
  condicion=true;
  nombreCar:any;
  public listaTransacciones:Array<any>=[]
  public listaTransaccionesFiltrada:Array<any>=[]
  titles: string[]=[
    'Modena',
    'Costo',
    'Tipo',
    'Fecha',
    'Eliminar'
  ];
  
  constructor(private servicioTransaccion: ServicioTransaccionService, 
  private mostrarTrans: MostrarTransService, private modalService: NgbModal,
  private nombreCartera:NombreCarteraService, private eliminarTransaccion: EliminarTransaccionService) { }
  ngOnInit(){
    this.servicioTransaccion.disparadorTransacciones.subscribe(transaccion => {
      this.listaTransacciones.push(transaccion);
    })
    this.mostrarTrans.disparadorMostrar.subscribe((condicion) => {
      this.condicion = condicion; // mostrar transacciones
    });
    this.nombreCartera.disparadorNombre.subscribe((nombreCar) => {
      this.nombreCar = nombreCar; // paso el nombre
      for (let index = 0; index < this.listaTransacciones.length; index++) {
        if (this.nombreCar==this.listaTransacciones[index].cartera) {
          this.listaTransaccionesFiltrada[index]=this.listaTransacciones[index];
        }else{
          console.log("Error en la comparacion de cartera y transaccion")
        }
      }
    });
  }
  eliminarM(modal: any){
    this.modalService.open(modal)
  };
  EliminarTransaccion(valor:any, precio:any){
    this.listaTransaccionesFiltrada.splice(valor,1)
    this.eliminarTransaccion.disparadorEliminarTransaccion.emit(precio)
  }
  
}
