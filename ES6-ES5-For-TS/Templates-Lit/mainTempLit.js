"use strict";
//Los templates literales permiten crear strings de otra forma
var nombre1 = "Bruce";
var nombre2 = "Ricardo";
function getNombres() {
    return nombre1 + " " + nombre2;
}
var mensajitox = "1. Esto es una linea normal\n2. Hola " + nombre1 + "\n3. Robin es: " + nombre2 + "\n4. Los nombres guardados son: " + getNombres() + "\n5. " + (5 + 7) * 8 + "\n";
console.log(mensajitox);
