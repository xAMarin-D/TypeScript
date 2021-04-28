

//FOR OF para barrer arreglos


let thorr = {
  nombre:"Thor",
  arma:"Mjolnir",
}

let iron = {
  nombre:"Iron Man",
  arma : "Armorsuit"
}

let capi ={
  nombre:"Capitan America",
  arma: "Escudo"
}

let vengadorsitos = [thorr, iron, capi];

//FOR 1
/*
for ( let in vengadorsitos){

}
*/


//FOR 2
/*
for (let i = 0; i <= vengadorsitos.length -1; i++){
  const av = vengadorsitos[i];
  console.log( av.nombre, av.arma );
}
*/

//FOR 3 ES EL MEJOR PARA RECORRER EL ARRAY EN TS

for (let av of vengadorsitos){
  console.log(av.nombre, av.arma)
}
