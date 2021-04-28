
//CREAR FUNCION GENERICA
//LA T PARA CONVERTIRLO EN GENERICO PUEDE SER CUALQUIER COSA PERO LA COSTUMBRE ES T


function regresar<T> (arg:T){
  return arg;
}


console.log (regresar (15.343252).toExponential(3) );
console.log (regresar ("Ricardo Tapia").toUpperCase() );
console.log (regresar ( new Date().getFullYear()  ) );
