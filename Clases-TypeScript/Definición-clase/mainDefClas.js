"use strict";
var Avg = /** @class */ (function () {
    function Avg(nom, equip, nomR, pPelear, pGanadas) {
        this.nombre = nom;
        this.equipo = equip;
        this.nombreReal = nomR;
        this.puedePelear = pPelear;
        this.peleasGanadas = pGanadas;
    }
    return Avg;
}());
var antman = new Avg("Antman", "Cap", "Scott", true, 43);
