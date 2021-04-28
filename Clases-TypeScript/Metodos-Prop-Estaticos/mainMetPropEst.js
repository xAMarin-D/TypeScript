"use strict";
var Xmenn = /** @class */ (function () {
    function Xmenn() {
        this.nombre = "Wolverine";
    }
    Xmenn.crearXmenn = function () {
        console.log("Se creo usando un metodo estatico");
        return new Xmenn();
    };
    return Xmenn;
}());
var wolverine2 = Xmenn.crearXmenn();
console.log(wolverine2);
//Los metodos estaticos no son ni publicos ni privados ni protegidos son ESTATICOS!
