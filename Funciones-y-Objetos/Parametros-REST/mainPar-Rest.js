"use strict";
function nombresCompletos(nombre) {
    var losDemasParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        losDemasParametros[_i - 1] = arguments[_i];
    }
    return nombre + " " + losDemasParametros.join(" ");
}
var supermann = nombresCompletos("Clark", "Joseph", "Kent");
var ironmann = nombresCompletos("Anthony", "Edward", "Tony", "Stark");
console.log(supermann);
console.log(ironmann);
