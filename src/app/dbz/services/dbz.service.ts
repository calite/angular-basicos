import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 14000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes]; // devuelve una copia del array
    }

    constructor() {
        console.log('Servicio Inicializado');
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }



}