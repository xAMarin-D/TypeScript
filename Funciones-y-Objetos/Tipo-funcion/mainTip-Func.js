"use strict";
function sumarr(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "I'm " + nombre;
}
function salvarMundo() {
    console.log("El mundo está salvado");
}
//De esta manera se puede restringir el parametro.
//let miFuncion: (a:number, b:number) => number ;
//let miFuncion: (a:string) => string ;
var miFuncion;
//miFuncion = 10;
//miFuncion = sumar;
//console.log(miFuncion(5,5));
//miFuncion = saludar;
//console.log(miFuncion("Batman"));
miFuncion = salvarMundo;
console.log(miFuncion());
