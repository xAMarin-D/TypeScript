"use strict";
var OPCIONES = "Activo";
if (true) {
    var OPCIONES_1 = "Activo";
}
for (var _i = 0, _a = [1, 2, 3, 4, 5, 6]; _i < _a.length; _i++) {
    var i = _a[_i];
    console.log(i);
}
//Permite poner una constante y no re declararse, a no ser que se puede definir la misma constante pero dentro de otro Scope.
var OPCIONEES = {
    estado: true,
    audio: 10,
    ultima: "main"
};
OPCIONEES.estado = false;
OPCIONEES.audio = 1;
console.log(OPCIONEES);
