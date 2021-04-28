"use strict";
// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil(auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
}
var batimovile = {
    encender: false,
    velocidadMaxima: 0,
    acelerar: function () {
        console.log("...... run!!!");
    }
};
// utilizando propiedades opcionales
var guason = {
    reir: true,
    comer: true,
    llorar: false
};
function reir(guason) {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
}
//ESTA ES LO MISMO QUE DE ABAJO PERO ACOMODADA A LA INTERFAZ
var ciudadGotica;
ciudadGotica = function (ciudadanos) {
    return ciudadanos.length;
};
var PersonaClass = /** @class */ (function () {
    function PersonaClass(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    PersonaClass.prototype.imprimirBio = function () {
        console.log("Una breve Descripcion");
    };
    return PersonaClass;
}());
// con las siguientes propiedades y metodos
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
