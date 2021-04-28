"use strict";
var Avgeng = /** @class */ (function () {
    function Avgeng(nom, equip, nomR, pPelear, pGanadas) {
        this.nombre = nom;
        this.equipo = equip;
        this.nombreReal = nomR;
        this.puedePelear = pPelear;
        this.peleasGanadas = pGanadas;
    }
    //METODOS
    Avgeng.prototype.bio = function () {
        var mensaje = this.nombre + " " + this.nombreReal + " " + this.equipo;
        console.log(mensaje);
    };
    Avgeng.prototype.cambiaEquipoPublico = function (nuevoEquipo) {
        return this.cambiarEquipo(nuevoEquipo);
    };
    Avgeng.prototype.cambiarEquipo = function (nuevoEquipo) {
        if (nuevoEquipo === this.equipo) {
            return false;
        }
        else {
            return true;
        }
    };
    return Avgeng;
}());
var robinuel = new Avgeng("Antman", "Cap", "Scott", true, 43);
robinuel.bio();
var d = robinuel.cambiaEquipoPublico("IronMan");
console.log(d);
