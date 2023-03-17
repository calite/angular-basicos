import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  //@Input() personajes : Personaje[] = []; //asociamos cosas del padre al hijo

  get personajes() { 
    return this.dbzService.personajes; //usamos el getter del servicio 
  }
  
  constructor ( private dbzService : DbzService ) {}
}
