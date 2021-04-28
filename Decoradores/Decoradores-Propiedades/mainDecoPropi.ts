
//Esto es un decorador de metodo
function editable ( esEditable:boolean){
  return function (target:any, nombrePropiedad:string, descriptor:PropertyDescriptor){
    descriptor.writable = esEditable;
  }
}


//Esto es un decorador de Propiedades
function editableProp ( esEditable:boolean){
  return function (target:any, nombrePropiedad:string):any{


    let descriptor:PropertyDescriptor = {
      writable:esEditable
    }
    return descriptor;
  }
}



class VillanoP {

  @editableProp(true)
  nombre:string
  constructor (nombre:string){
    this.nombre= nombre;
  }
  @editable(false)
  plan(){
    console.log(" es dominar el mundo")
  }
}

let lexP = new VillanoP("Lex Luthor");

console.log(lexP);
