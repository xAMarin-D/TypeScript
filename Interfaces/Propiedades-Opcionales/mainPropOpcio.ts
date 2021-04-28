interface Equismensito{
  nombre:string,
  poder?:string
};





function enviarMisiones(xmen:Equismensito){
  console.log("Enviando a la mision a:" + xmen.nombre);
};


function enviarCuarteles(xmen:Equismensito){
  console.log("Enviado al cuartel a: " + xmen.nombre);
};


let lobito:Equismensito = {
  nombre: "Wolverine",

};

enviarMisiones(lobito);
enviarCuarteles(lobito);
