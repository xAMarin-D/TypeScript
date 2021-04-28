"use strict";
;
//See puede obligar a las clases a tener cierta forma
var Mutantoide = /** @class */ (function () {
    function Mutantoide(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
    Mutantoide.prototype.regenerarz = function (nombre) {
        console.log("Hola" + nombre);
    };
    return Mutantoide;
}());
var wolverine = new Mutantoide("Lobito", "Re Poderoso");
wolverine.regenerarz(wolverine.nombre);
