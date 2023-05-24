import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ContactoService } from 'src/app/services/contacto.service';
import { Contacto } from 'src/domain/contacto';

@Component({
  selector: 'app-listacontactos',
  templateUrl: './listacontactos.component.html',
  styleUrls: ['./listacontactos.component.scss']
})
export class ListacontactosComponent {


  listadoContactos: Contacto[] = [] 
  contactoSeleccionado: Contacto | null = null;
  
  constructor(contactoService: ContactoService,private router: Router ) {
    this.listadoContactos = contactoService.getlist()
    console.log('listadoContactos', this.listadoContactos)
  }


  editar(contacto: Contacto){
    console.log(contacto)


    let params: NavigationExtras = {
      queryParams: {
        contacto: contacto,
        nombre: 'Usuario'
      }
    }
    this.router.navigate(['templete/formulario'], params)
  
  }


  eliminar(contacto: Contacto) {
    for(let i = 0 ; i < this.listadoContactos.length ; i++){
      if(this.listadoContactos[i] === contacto){
        console.log("son iguales");
        this.listadoContactos.splice(i,1);
      }
    }
  }


}
