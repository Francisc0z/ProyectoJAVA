import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicioCarterasService } from 'src/app/services/servicio-carteras.service';
import { ServicioTransaccionService } from 'src/app/services/servicio-transaccion.service';
import { PrecioTotalService } from 'src/app/services/precio-total.service'
 


interface Coin{
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price:number;
  price_change_percentage_24h: number;
  total_volume: number;
}

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.css']
})


export class MonedasComponent implements OnInit{
  coins: Coin[]=[];
  precioCrypto=0;
  name = '';
  url='';
  compraValor='Compra';
  ventaValor='Venta';
  fec= new Date();
  fechaActual = this.fec.getDate() + '/' + ( this.fec.getMonth() + 1 ) + '/' + this.fec.getFullYear();
  transaccion={};
  carteraNombre='';  
  searchText='';
  filteredCoins: Coin[]=[];
  monto=0;
  titles: string[]=[
    'Moneda',
    'Precio',
    'Cambio de precio',
    'Comprar',
    'Vender'
  ];
  constructor(private http: HttpClient,private modalService: NgbModal, private servicioCarteras: ServicioCarterasService,
    private servicioTransaccion: ServicioTransaccionService, private precioTotal: PrecioTotalService){}
  compra(modal: any){
    this.modalService.open(modal)
  };
  venta(modal: any){
    this.modalService.open(modal)
  };
  searchCoin(){
    this.filteredCoins = this.coins.filter((coin)=>
    coin.name.toLowerCase().includes(this.searchText.toLowerCase()) || 
    coin.symbol.toLowerCase().includes(this.searchText.toLowerCase())
    );
  } 

  ngOnInit(){
    this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .subscribe(
      (res) => {
        console.log(res);
        this.coins=res
        this.filteredCoins=res;
      },
      (err)=>console.log(err)
    );
    this.servicioCarteras.disparadorDeCarteras.subscribe(cartera => {
      this.listaCarteras.push(cartera);
    })
  };
  guardar(imagen:any,valor:any, nombre:any){
    this.url=imagen;
    this.precioCrypto=valor;
    this.name=nombre;
    this.transaccion={
      imagen: this.url,
      precio: this.precioCrypto*this.monto,
      nombre: this.name,
    }
  }
  correctoCompra(modal: any){
    this.modalService.open(modal);
    let transaccion={
      imagen: this.url,
      precio: this.monto*this.precioCrypto,
      nombre: this.name,
      fecha: this.fechaActual,
      cartera: this.carteraNombre,
      tipo: this.compraValor,
      monto: this.monto
    }
    this.servicioTransaccion.disparadorTransacciones.emit(transaccion)
    this.precioTotal.disparadorTotal.emit(transaccion.precio)
  }; 
  correctoVenta(modal: any){
    this.modalService.open(modal);
    let transaccion={
      imagen: this.url,
      precio: this.monto*this.precioCrypto,
      nombre: this.name,
      fecha: this.fechaActual,
      cartera: this.carteraNombre,
      tipo: this.ventaValor
    }
    this.servicioTransaccion.disparadorTransacciones.emit(transaccion)
    this.precioTotal.disparadorTotal.emit(transaccion.precio)
  }; 
  public listaCarteras:Array<any>=[]
}
