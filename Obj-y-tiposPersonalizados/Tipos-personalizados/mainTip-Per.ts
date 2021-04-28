


type Heroe = {
  nombre:string,
  edad:number,
  poderes:any[],
  getNombre:()=>string,


}





let flashhhh: Heroe= {
  nombre: "Barry Allen",
  edad: 24,
  poderes: ["Puede correr muy rapido", "Viajar en el tiempo"],

  getNombre(){
    return this.nombre;
  }

};


let supermannnn:Heroe= {
  nombre: "Clark Kent",
  edad: 500,
  poderes: ["Puede Volar", "Super Velocidad",223],

  getNombre(){
    return this.nombre;
  }

};
