

//Permite crear una app que solo tiene un import de JS

import restar from "../validaciones/numeros";

import * as textos from "../validaciones/textos"




//textos es solo un alias traido desde la ruta

console.log(restar(10,5));
//restar es la funcion por defecto del archivo numeros por que le puse el default, cuando se llama una
//funcion por defecto no es necesario ponerle llaves ni nada, si llamo algo suelto tiene que ser con llaves y si quiero llamar todo lo que
//tenga export desde la otra hoja se pone *

console.log( textos.obtenerError(1));
