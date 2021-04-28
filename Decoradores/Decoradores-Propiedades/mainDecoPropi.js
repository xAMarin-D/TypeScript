"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Esto es un decorador de metodo
function editable(esEditable) {
    return function (target, nombrePropiedad, descriptor) {
        descriptor.writable = esEditable;
    };
}
//Esto es un decorador de Propiedades
function editableProp(esEditable) {
    return function (target, nombrePropiedad) {
        var descriptor = {
            writable: esEditable
        };
        return descriptor;
    };
}
var VillanoP = /** @class */ (function () {
    function VillanoP(nombre) {
        this.nombre = nombre;
    }
    VillanoP.prototype.plan = function () {
        console.log(" es dominar el mundo");
    };
    __decorate([
        editableProp(true)
    ], VillanoP.prototype, "nombre", void 0);
    __decorate([
        editable(false)
    ], VillanoP.prototype, "plan", null);
    return VillanoP;
}());
var lexP = new VillanoP("Lex Luthor");
console.log(lexP);
