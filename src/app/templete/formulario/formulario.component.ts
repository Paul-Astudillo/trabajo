import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactoService } from 'src/app/services/contacto.service';
import { Contacto } from 'src/domain/contacto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  contacto:Contacto=new Contacto();

constructor(private contactoService: ContactoService,
  private router: Router) {

    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      console.log(params)
      this.contacto = new Contacto()
      this.contacto = params['contacto']
    }
  }


  guardar(){
    console.log(this.contacto)
    this.contactoService.save(this.contacto)
    this.contacto= new Contacto()

   this.router.navigate(["paginas/listacontactos"]);


  }
  actualizar(){
    console.log(this.contacto)
    this.contacto= new Contacto()
    this.router.navigate(["paginas/listacontactos"]);
  }


}
