import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ListacontactosComponent } from './pages/listacontactos/listacontactos.component';
import { FormularioComponent } from './templete/formulario/formulario.component';
import { TituloComponent } from './templete/titulo/titulo.component';

const routes: Routes = [
  {path:"templete/formulario", component:FormularioComponent},
  {path:"paginas/listacontactos", component:ListacontactosComponent},
  {path:"paginas/contacto", component:ContactoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
