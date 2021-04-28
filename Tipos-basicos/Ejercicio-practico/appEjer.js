"use strict";
// Tipos
var batmann = "Bruce";
var superman = "Clark";
var existee = false;
// Tuplas
var parejaHeroes = [batmann, superman];
var villanoo = ["Lex Lutor", 5, true];
// Arreglos
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
console.log([1], [2], [3]);
//Enumeraciones
var Fuerza;
(function (Fuerza) {
    Fuerza[Fuerza["aquaman"] = 0] = "aquaman";
    Fuerza[Fuerza["batmann"] = 1] = "batmann";
    Fuerza[Fuerza["flash"] = 5] = "flash";
    Fuerza[Fuerza["supermann"] = 100] = "supermann";
})(Fuerza || (Fuerza = {}));
var fuerzaFlash = Fuerza.flash;
var fuerzaSuperman = Fuerza.supermann;
var fuerzaBatman = Fuerza.batmann;
var fuerzaAcuaman = Fuerza.aquaman;
;
// Retorno de funciones
function activar_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
// Aserciones de Tipo
var poder = "100";
var largoDelPoder = poder.length;
console.log(largoDelPoder);
// Aserciones de Tipo
var poder2 = 100;
var largoDelPoder2 = poder2.toString.length;
console.log(largoDelPoder2);
