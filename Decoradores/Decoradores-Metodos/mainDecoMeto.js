"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function editable(esEditable) {
    return function (target, nombrePropiedad, descriptor) {
        if (!esEditable) {
            console.warn("No me haran cambiar de Opinion");
        }
        descriptor.writable = esEditable;
    };
}
var VillanoO = /** @class */ (function () {
    function VillanoO(nombre) {
        this.nombre = nombre;
    }
    VillanoO.prototype.plan = function () {
        console.log("Es dominar el mundo");
    };
    __decorate([
        editable(false)
    ], VillanoO.prototype, "plan", null);
    return VillanoO;
}());
var lexO = new VillanoO("Lex Luthor");
lexO.plan = function () {
    console.log("Es cortar Flores");
};
lexO.plan();
