


//neneene
//NANANANNAAN
/*
Esto es un comentario re flashero man ..
....
...
...
fjndklsajfkldasjkfldsa
asdasdasdasdsa
joifdsajofisad
jhfiosjfoidsa
........
*/
// asdasdasdasdasdasdasdasdsadsa


//Par remover los comentarios se hace en el archivo tsconfig.json  con removeComments

// O puede ser (Mucho mas util) con el comando tsc (Nombrearchivo .ts) --removeComments





let nombrePer:string = "Maltes";
let edadPer:number = 5;

let mensajitoo = imprimir(nombrePer,edadPer);

console.log(mensajitoo);


function imprimir(nombrePer:string, edadPer:number):string{

  nombrePer = nombrePer.toLowerCase();
  edadPer = edadPer + 10;
  return nombrePer + " " + edadPer;

}
