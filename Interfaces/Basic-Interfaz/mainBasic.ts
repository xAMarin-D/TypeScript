interface Equismen{
  nombre:string,
  poder:string
};





function enviarMisionesss(xmen:Equismen){
  console.log("Enviando a la mision a:" + xmen.nombre);
};


function enviarCuartelesss(xmen:Equismen){
  console.log("Enviado al cuartel a: " + xmen.nombre);
};


let wolverinoz:Equismen= {
  nombre: "Wolverine",
  poder: "Regeneración"
};

enviarMisionesss(wolverinoz);
enviarCuartelesss(wolverinoz);
