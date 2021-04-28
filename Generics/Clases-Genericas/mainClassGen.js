"use strict";
var Cuadrado = /** @class */ (function () {
    function Cuadrado(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Cuadrado.prototype.area = function () {
        return +this.base * +this.altura;
    };
    return Cuadrado;
}());
var cuadrado = new Cuadrado(20, "10");
console.log(cuadrado.area());
