"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function parametro(target, metodo, index) {
    console.log(target, metodo, index);
}
var VillanoZ = /** @class */ (function () {
    function VillanoZ(nombre) {
        this.nombre = nombre;
    }
    VillanoZ.prototype.imprimir = function (plan, mensaje) {
        if (plan) {
            console.log("el plan es: " + mensaje);
        }
        else {
            console.log(mensaje);
        }
    };
    __decorate([
        __param(1, parametro)
    ], VillanoZ.prototype, "imprimir", null);
    return VillanoZ;
}());
