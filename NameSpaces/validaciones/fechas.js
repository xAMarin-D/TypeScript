"use strict";
var Validaciones;
(function (Validaciones) {
    function validarFechas(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        else {
            return true;
        }
    }
    Validaciones.validarFechas = validarFechas;
})(Validaciones || (Validaciones = {}));
