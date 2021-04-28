function nombreCompletos(nombre:string, apellido?:string):string{

  if(apellido){
  return nombre + " " + apellido;
}else{
  return nombre;
}

}

let nombres = nombreCompletos("Barry","Allen"); //// OPTIMIZE:

let nombrez = nombreCompletos("Barry")
console.log(nombres);
console.log(nombrez);
