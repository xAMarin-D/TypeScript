

function nombreCompletoo(nombre:string, apellido: string, capitalizado:boolean = true ){
  if( capitalizado ){
    return capitalizar(nombre) + " " + capitalizar(apellido);
  }else{
    return nombre + " " + apellido;
  }
}



function capitalizar(palabra:string):string{
  return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}


var nombrex = nombreCompletoo("tony","stark")

console.log(nombrex);
