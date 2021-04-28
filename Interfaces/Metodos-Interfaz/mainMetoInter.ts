interface Equismenx{
  nombre:string,
  poder?:string,

  regenerarc( nombreVerdad:string):void;

};
//Las propiedades puedes ser opcionales con signo de pregunta al igual que los metodos.




function enviarMisioness(xmen:Equismenx){
  console.log("Enviando a la mision a:" + xmen.nombre);
  xmen.regenerarc("Logan");
  xmen.regenerarc("Gatito Ficha");
};


function enviarCuarteless(xmen:Equismenx){
  console.log("Enviado al cuartel a: " + xmen.nombre);
};


let lobitos:Equismenx = {
  nombre: "Wolverine",
  regenerarc(j:string){
    console.log("se ha regenerado: " + j)
  }
};


let gatitos = {
  nombre:"Gato Fichon",
  regenerarc(){

  }
}

enviarCuarteless(gatitos);
enviarMisioness(gatitos);

enviarMisioness(lobitos);
enviarCuarteless(lobitos);
