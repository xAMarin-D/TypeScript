"use strict";
var Avge = /** @class */ (function () {
    function Avge(nom, equip, nomR, pPelear, pGanadas) {
        this.nombre = nom;
        this.equipo = equip;
        this.nombreReal = nomR;
        this.puedePelear = pPelear;
        this.peleasGanadas = pGanadas;
    }
    return Avge;
}());
var antmann = new Avge("Antman", "Cap", "Scott", true, 43);
console.log(antmann);
