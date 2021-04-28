"use strict";
function nombreCompletos(nombre, apellido) {
    if (apellido) {
        return nombre + " " + apellido;
    }
    else {
        return nombre;
    }
}
var nombres = nombreCompletos("Barry", "Allen"); //// OPTIMIZE:
var nombrez = nombreCompletos("Barry");
console.log(nombres);
console.log(nombrez);
