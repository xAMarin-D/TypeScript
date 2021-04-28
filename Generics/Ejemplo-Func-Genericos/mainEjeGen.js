"use strict";
//Ejemplo de funcion Generica
function funcionGenerica(arg) {
    return arg;
}
var deadpool = {
    nombre: "Deadpool",
    nombreReal: "Wade Winston Wilson",
    poder: "Regeneracion"
};
//Si le pongo el generico VillanoH me salen solo las propiedades de villano en el punto y asi mismo con el otro
console.log(funcionGenerica(deadpool).nombre);
