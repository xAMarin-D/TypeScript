"use strict";
// una clase abstracta impide crear instancias, sirve especificamente para crear un molde
// de una clase para heredarle las cosas a otra clase
// en resumen solo sirven para heredar 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mutantes = /** @class */ (function () {
    function Mutantes(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    return Mutantes;
}());
var Xmennn = /** @class */ (function (_super) {
    __extends(Xmennn, _super);
    function Xmennn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Xmennn;
}(Mutantes));
var wolverino = new Xmennn("Wolverine", "Logan");
console.log(wolverino);
