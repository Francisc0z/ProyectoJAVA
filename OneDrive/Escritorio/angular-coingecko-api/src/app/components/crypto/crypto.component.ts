import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicioCarterasService } from 'src/app/servicio-carteras.service';
import { ServicioTransaccionService } from 'src/app/servicio-transaccion.service';
import { MostrarTransService } from 'src/app/mostrar-trans.service';
import { NombreCarteraService } from 'src/app/nombre-cartera.service';
import { PrecioTotalService } from 'src/app/precio-total.service'
import { EliminarTransaccionService } from 'src/app/eliminar-transaccion.service'


@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})

export class CryptoComponent implements OnInit {
  carteras:any[] = [];
  i=0;
  precioFinal=0;
  precioEliminar=0;
  // los input del formulario se asocian con un modelo
  cartera:any = {};
  constructor(private modalService: NgbModal,
  private servicioCarteras: ServicioCarterasService,private mostrarTrans: MostrarTransService,
  private nombreCartera:NombreCarteraService, private precioTotal: PrecioTotalService , 
  private eliminarTransaccion: EliminarTransaccionService) { }

  titles: string[]=[
    'Cartera',
    'Valor Total',
    'Transac',
    'Eliminar'
  ];
  aniadir(modal: any){
    this.modalService.open(modal)
  };
  eliminarM(modal: any){
    this.modalService.open(modal)
  };
  correcto(modal: any){
    this.modalService.open(modal)
  };
  ngOnInit(){
    this.precioTotal.disparadorTotal.subscribe((precioTotal) => {
      this.precioTotal = precioTotal;
      this.precioFinal= this.precioFinal+precioTotal;
      console.log(this.precioFinal)
    });
    this.eliminarTransaccion.disparadorEliminarTransaccion.subscribe((precioEliminar) => {
      this.precioEliminar = precioEliminar;
      console.log(precioEliminar)
      this.precioFinal= this.precioFinal-precioEliminar;
    });
  }
  guardar(){
    // se inserta el dato en el arreglo
    this.carteras.push(this.cartera);

    // se crea un nuevo objeto para almacenar nuevos datos
    this.cartera = {};    
  }
  agregarCartera(){
    this.servicioCarteras.disparadorDeCarteras.emit(this.carteras[this.i])
    this.i=this.i+1
    return (this.i);
  };
  
  EliminarCartera(valor:any){
    this.carteras.splice(valor,1)
  }
  mostrarTransacciones(valor:any){
    let condicion=false;
    let nombreCar=this.carteras[valor].nombre
    console.log(this.carteras[valor].nombre)
    this.mostrarTrans.disparadorMostrar.emit(condicion);
    this.nombreCartera.disparadorNombre.emit(nombreCar);
  }
}



