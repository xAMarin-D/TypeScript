"use strict";
var Validaciones;
(function (Validaciones) {
    function validarTextos(texto) {
        if (texto.length >= 3) {
            return true;
        }
        return false;
    }
    Validaciones.validarTextos = validarTextos;
})(Validaciones || (Validaciones = {}));
