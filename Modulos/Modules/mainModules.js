"use strict";
//Permite crear una app que solo tiene un import de JS
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var numeros_1 = __importDefault(require("../validaciones/numeros"));
var textos = __importStar(require("../validaciones/textos"));
//textos es solo un alias traido desde la ruta
console.log(numeros_1.default(10, 5));
//restar es la funcion por defecto del archivo numeros por que le puse el default, cuando se llama una
//funcion por defecto no es necesario ponerle llaves ni nada, si llamo algo suelto tiene que ser con llaves y si quiero llamar todo lo que
//tenga export desde la otra hoja se pone *
console.log(textos.obtenerError(1));
