"use strict";
/*
let flashhh: {nombre:string, edad:number, poderes:string[], getNombre:()=>string}= {
  nombre: "Barry Allen",
  edad: 24,
  poderes: ["Puede correr muy rapido", "Viajar en el tiempo"],

  getNombre(){
    return this.nombre;
  }

};


flashhh.getNombre()
*/
var flashhh = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr muy rapido", "Viajar en el tiempo"],
    getNombre: function () {
        return this.nombre;
    }
};
var supermannn = {
    nombre: "Clark Kent",
    edad: 500,
    poderes: ["Puede Volar", "Super Velocidad", 223],
    getNombre: function () {
        return this.nombre;
    }
};
//Es correcto pero en tipos personalizados es mejor y mas limpio
