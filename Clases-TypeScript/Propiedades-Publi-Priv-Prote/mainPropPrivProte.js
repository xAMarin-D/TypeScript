"use strict";
var Avgen = /** @class */ (function () {
    //private nombreReal: string;
    //private puedePelear: boolean;
    //private peleasGanadas:number;
    function Avgen(nom, equip /*, nomR:string, pPelear: boolean, pGanadas:number*/) {
        this.nombre = nom;
        this.equipo = equip;
        //this.nombreReal = nomR;
        //this.puedePelear = pPelear;
        //this.peleasGanadas = pGanadas;
    }
    return Avgen;
}());
var antmannn = new Avgen("Antman", "Cap");
// Public: puede ser accesado a través de cualquier parte del programa mientars tenga la clase definida.
// Protected: Solo se pueden cambiar los nombres dentro de la clase original o dentro de las clases hijas o herencias.
// Private: Solo pueden ser modificados los valores o las propiedades dentro de la misma clase o constructor.
antmannn.nombre = "Nick Fury";
console.log(antmannn);
