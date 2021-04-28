

// Es una agrupacion de funciones y propiedades de manera global

//Toda nuestra logica de validacion va a estar en un solo archivo que sera este namespace

//Todo lo que esta dentro del namespace tiene que estar como export.

namespace Validaciones {



//Funcion para validar validarTexto

export function  validarTexto(texto:string):boolean{
  if (texto.length >= 3) {
    return true;
  }
  return false;
}

//Funcion para validar fecha

export function validarFecha(fecha:Date):boolean{
  if (isNaN( fecha.valueOf())) {
    return false;
  }else{
  return true;
  }
 }

}

//Validar Texto
console.log(Validaciones.validarTexto("Alejandro"));


let Hoy  = new Date;
