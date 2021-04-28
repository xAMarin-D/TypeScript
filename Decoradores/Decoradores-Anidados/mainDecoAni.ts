
function planVillanoJ (constructor:Function){
  constructor.prototype.imprimirPlan = function(){
    console.log("El plan de " + this.nombre + " es dominar el mundo con el poder de " + this.poder);

  }
}




function imprimible (constructor:Function){
  constructor.prototype.imprimir = function(){
    console.log(this);

  }
}

@imprimible
@planVillanoJ
class VillanoJ{
  nombre:string;
  poder:string
  constructor (nombre:string, poder: string){
    this.nombre = nombre;
    this.poder = poder;
  }
}


let lexJ = new VillanoJ("Lex Luthor", "Super Mente");




(<any>lexJ).imprimirPlan();
(<any>lexJ).imprimir();
