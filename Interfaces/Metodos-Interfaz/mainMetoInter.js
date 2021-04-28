"use strict";
;
//Las propiedades puedes ser opcionales con signo de pregunta al igual que los metodos.
function enviarMisioness(xmen) {
    console.log("Enviando a la mision a:" + xmen.nombre);
    xmen.regenerarc("Logan");
    xmen.regenerarc("Gatito Ficha");
}
;
function enviarCuarteless(xmen) {
    console.log("Enviado al cuartel a: " + xmen.nombre);
}
;
var lobitos = {
    nombre: "Wolverine",
    regenerarc: function (j) {
        console.log("se ha regenerado: " + j);
    }
};
var gatitos = {
    nombre: "Gato Fichon",
    regenerarc: function () {
    }
};
enviarCuarteless(gatitos);
enviarMisioness(gatitos);
enviarMisioness(lobitos);
enviarCuarteless(lobitos);
