"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerError = exports.MENSAJES = void 0;
exports.MENSAJES = [
    "El texto es muy corto",
    "El texto es muy largo"
];
function obtenerError(numError) {
    if (numError > exports.MENSAJES.length) {
        return "El codigo de error no existe";
    }
    return exports.MENSAJES[numError];
}
exports.obtenerError = obtenerError;
