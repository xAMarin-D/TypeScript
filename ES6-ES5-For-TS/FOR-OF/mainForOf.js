"use strict";
//FOR OF para barrer arreglos
var thorr = {
    nombre: "Thor",
    arma: "Mjolnir",
};
var iron = {
    nombre: "Iron Man",
    arma: "Armorsuit"
};
var capi = {
    nombre: "Capitan America",
    arma: "Escudo"
};
var vengadorsitos = [thorr, iron, capi];
//FOR 1
/*
for ( let in vengadorsitos){

}
*/
//FOR 2
/*
for (let i = 0; i <= vengadorsitos.length -1; i++){
  const av = vengadorsitos[i];
  console.log( av.nombre, av.arma );
}
*/
//FOR 3 ES EL MEJOR PARA RECORRER EL ARRAY EN TS
for (var _i = 0, vengadorsitos_1 = vengadorsitos; _i < vengadorsitos_1.length; _i++) {
    var av = vengadorsitos_1[_i];
    console.log(av.nombre, av.arma);
}
