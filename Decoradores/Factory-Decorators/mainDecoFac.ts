
//Decorador de clase normal
function consolas(constructor:Function){
  console.log(constructor);
}

//Decorador Factory
function imprimirConsola (imprimir:boolean):Function {
  if (imprimir) {
    return consolas;
  }else{
    return alert;
  }
}


@imprimirConsola(false)
class VillanoC {

  constructor(public nombre:string){

  }
}
