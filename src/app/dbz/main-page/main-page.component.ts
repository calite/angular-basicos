import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  //personajes : Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }
  /*
  get personajes() : Personaje[] { //podemos traer los personajes de esta otra manera
    return this.dbzService.personajes;
  }
  */

  //usamos el constructor para injectar el servicio
  constructor( private dbzService : DbzService ) {
    //this.personajes = this.dbzService.personajes; //asignamos los personajes a los personajes que tiene el servicio
  }

}
