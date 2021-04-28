/*
let flashhh: {nombre:string, edad:number, poderes:string[], getNombre:()=>string}= {
  nombre: "Barry Allen",
  edad: 24,
  poderes: ["Puede correr muy rapido", "Viajar en el tiempo"],

  getNombre(){
    return this.nombre;
  }

};


flashhh.getNombre()
*/

let flashhh: {nombre:string, edad:number, poderes:string[], getNombre:()=>string}= {
  nombre: "Barry Allen",
  edad: 24,
  poderes: ["Puede correr muy rapido", "Viajar en el tiempo"],

  getNombre(){
    return this.nombre;
  }

};


let supermannn: {nombre:string, edad:number, poderes:any[], getNombre:()=>string}= {
  nombre: "Clark Kent",
  edad: 500,
  poderes: ["Puede Volar", "Super Velocidad",223],

  getNombre(){
    return this.nombre;
  }

};

//Es correcto pero en tipos personalizados es mejor y mas limpio
