function parametro(target:any,  metodo:string, index:number){
  console.log(target, metodo, index)
}


class VillanoZ {
  nombre:string
  constructor(nombre:string){
    this.nombre = nombre
  }

  imprimir(plan:boolean, @parametro mensaje:string):void{
    if (plan) {
      console.log("el plan es: " + mensaje)
    }else{
    console.log(mensaje);
      
    }
  }
}
