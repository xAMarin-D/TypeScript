"use strict";
// Es una agrupacion de funciones y propiedades de manera global
//Toda nuestra logica de validacion va a estar en un solo archivo que sera este namespace
//Todo lo que esta dentro del namespace tiene que estar como export.
var Validaciones;
(function (Validaciones) {
    //Funcion para validar validarTexto
    function validarTexto(texto) {
        if (texto.length >= 3) {
            return true;
        }
        return false;
    }
    Validaciones.validarTexto = validarTexto;
    //Funcion para validar fecha
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        else {
            return true;
        }
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));
//Validar Texto
console.log(Validaciones.validarTexto("Alejandro"));
var Hoy = new Date;
