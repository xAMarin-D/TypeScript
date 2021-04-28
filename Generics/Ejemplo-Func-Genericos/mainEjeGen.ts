//Ejemplo de funcion Generica



function funcionGenerica<T>(arg:T){
  return arg;
}


type HeroeH = {
  nombre:string;
  nombreReal:string;
}


type VillanoH = {
  nombre:string;
  poder:string;
}

let deadpool = {
  nombre: "Deadpool",
  nombreReal: "Wade Winston Wilson",
  poder: "Regeneracion"
}

//Si le pongo el generico VillanoH me salen solo las propiedades de villano en el punto y asi mismo con el otro
console.log (     funcionGenerica<VillanoH>(deadpool).nombre      );
