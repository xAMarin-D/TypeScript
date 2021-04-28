"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function planVillanoJ(constructor) {
    constructor.prototype.imprimirPlan = function () {
        console.log("El plan de " + this.nombre + " es dominar el mundo con el poder de " + this.poder);
    };
}
function imprimible(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
var VillanoJ = /** @class */ (function () {
    function VillanoJ(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
    VillanoJ = __decorate([
        imprimible,
        planVillanoJ
    ], VillanoJ);
    return VillanoJ;
}());
var lexJ = new VillanoJ("Lex Luthor", "Super Mente");
lexJ.imprimirPlan();
lexJ.imprimir();
