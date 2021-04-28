"use strict";
//Solo se puede instanciar una sola vez
var Apocalypsis = /** @class */ (function () {
    function Apocalypsis(nombre) {
        this.nombre = nombre;
    }
    Apocalypsis.obtenerInstancia = function () {
        if (!Apocalypsis.instancia) {
            Apocalypsis.instancia = new Apocalypsis("Im the true apocalypsis");
        }
        return Apocalypsis.instancia;
    };
    return Apocalypsis;
}());
//No se puede llamar asi
//let apocalypsisFalso = new Apocalypsis("Soy Apocalypsis Falso");
var real = Apocalypsis.obtenerInstancia();
console.log(real);
