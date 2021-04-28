"use strict";
// Es una agrupacion de funciones y propiedades de manera global
//Toda nuestra logica de validacion va a estar en un solo archivo que sera este namespace
//Todo lo que esta dentro del namespace tiene que estar como export.
//Lo mejor es separar esto para que toda la logica no este en un mimso archivo
/*
namespace Validacion {



//Funcion para validar validarTexto

export function  validarTextos(texto:string):boolean{
  if (texto.length >= 3) {
    return true;
  }
  return false;
}

Funcion para validar fecha

export function validarFechas(fecha:Date):boolean{
  if (isNaN( fecha.valueOf())) {
    return false;
  }else{
  return true;
  }
 }

}




LOS NAMESPACES SE PUEDE IMPORTAR ASI



*/
// ESTE SERÁ MI LANZADOR
//Validar Texto
if (Validaciones.validarTextos("Barry Allen")) {
    console.log("El texto es valido");
}
else {
    console.log("El Texto es invalido");
}
console.log(Validaciones.validarTextos("Alejandro"));
//let Ayer  = new Date;
