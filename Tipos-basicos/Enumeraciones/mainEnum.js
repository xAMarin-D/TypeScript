"use strict";
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 10] = "min";
    Volumen[Volumen["medio"] = 50] = "medio";
    Volumen[Volumen["max"] = 100] = "max";
})(Volumen || (Volumen = {}));
var audio = Volumen.min;
console.log(audio);
console.log(Volumen[100]);
//Si no le defino igualdad al enum me va sumando de a 1 en orden
