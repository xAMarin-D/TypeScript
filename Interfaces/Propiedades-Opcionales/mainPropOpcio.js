"use strict";
;
function enviarMisiones(xmen) {
    console.log("Enviando a la mision a:" + xmen.nombre);
}
;
function enviarCuarteles(xmen) {
    console.log("Enviado al cuartel a: " + xmen.nombre);
}
;
var lobito = {
    nombre: "Wolverine",
};
enviarMisiones(lobito);
enviarCuarteles(lobito);
