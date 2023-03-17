import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  //ngFor
  heroes : string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  heroeBorrado : string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }

  mostrarTitulo(heroeBorrado : string) : boolean {

    if(heroeBorrado.length > 0) {
      return true;
    }

    return false;

  }

}
