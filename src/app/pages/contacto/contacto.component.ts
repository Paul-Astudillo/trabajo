import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactoService } from 'src/app/services/contacto.service';
import { Contacto } from 'src/domain/contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  contacto: Contacto = new Contacto();

  constructor(private contactoService: ContactoService,
    
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.contacto = new Contacto()
        this.contacto = params['contacto']
      }
    }

}
