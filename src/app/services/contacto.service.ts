import { Injectable } from '@angular/core';
import { Contacto } from 'src/domain/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  constructor() { }
  Contactos :Contacto[]=[]

  

  save(contacto:Contacto){

    this.Contactos.push(contacto)
    console.log(this.Contactos);
    
  }
  getlist(){
return this.Contactos

  }


}
