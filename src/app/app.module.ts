import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './templete/titulo/titulo.component';
import { FormularioComponent } from './templete/formulario/formulario.component';
import { ListacontactosComponent } from './pages/listacontactos/listacontactos.component';
import { MenuComponent } from './templete/menu/menu.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CalculadoraComponent } from './templete/calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { MensajeComponent } from './templete/mensaje/mensaje.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    FormularioComponent,
    ListacontactosComponent,
    MenuComponent,
    ContactoComponent,
    CalculadoraComponent,
    MensajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
