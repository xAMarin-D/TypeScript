
function planVillano (constructor:Function){
  constructor.prototype.imprimirPlan = function(){
    console.log("El plan de " + this.nombre + "es dominar el mundo");

  }
}


@planVillano
class VillanoF{
  nombre:string;
  constructor (nombre:string){
    this.nombre = nombre;
  }
}


let lex = new VillanoF("Lex Luthor");




(<any>lex).imprimirPlan();
