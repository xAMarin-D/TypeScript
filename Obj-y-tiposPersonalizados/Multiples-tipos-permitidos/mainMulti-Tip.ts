type Heroee = {

  nombre:string,
  edad:number,


};


let loqueSea:string | number | Heroee = "Fernando";

loqueSea = {
  nombre:"Nombre",
  edad:23,
}


//El tubito me deja ponerle multiples tipos
