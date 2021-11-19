import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import {MonedasComponent} from './components/monedas/monedas.component';
import {NgbModal, ModalDismissReasons, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarteraComponent } from './components/cartera/cartera.component';


@NgModule({
  declarations: [
    AppComponent,
    CryptoComponent,
    MonedasComponent,
    CarteraComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
