import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input() nuevo : Personaje = { //esperando un personaje nuevo
    nombre : '',
    poder : 0
  }
  //emisor de eventos - va a enviar el personaje al main page
  //@Output() onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter(); 

  constructor ( private dbzService : DbzService ) {}

  agregar() {
    //event.preventDefault(); //prevenir recargar el navegador
    //tiene que pasarse $event como parametro en la funcion del form submit
    //console.log(event);
    
    if(this.nuevo.nombre.trim().length === 0) { //validacion cutre
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevo);
    
    //this.onNuevoPersonaje.emit( this.nuevo ); //enviamos el personaje

    this.nuevo = {
      nombre : "", 
      poder : 0
    };

  }

}
