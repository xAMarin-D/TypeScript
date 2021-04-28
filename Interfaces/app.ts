// Crear interfaces
interface Auto{
  encender:boolean;
  velocidadMaxima: number;
  acelerar():void;
}



// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil( auto:Auto ):void{
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

let batimovile:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... run!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto

interface Payaso{
  reir?:boolean,
  comer?:boolean,
  llorar?:boolean
}
// utilizando propiedades opcionales



let guason:Payaso = {
  reir: true,
  comer:true,
  llorar:false
}

function reir( guason:Payaso ):void{
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface Ciudadanxs{
  (ciudadanos:string[]):number;
}

//ESTA ES LO MISMO QUE DE ABAJO PERO ACOMODADA A LA INTERFAZ
let ciudadGotica : Ciudadanxs;
ciudadGotica = function (ciudadanos:string[]):number{
  return ciudadanos.length;
}


/*
function ciudadGotica( ciudadanos:string[] ):number{
  return ciudadanos.length;
}
*/










// Cree una interfaz que obligue crear una clase

interface Persona {
  nombre:string,
  edad:number,
  sexo:number,
  estadoCivil:string,

  imprimirBio():void;
}

class PersonaClass implements Persona{
  nombre:string;
  edad:number;
  sexo:number;
  estadoCivil:string;
  imprimirBio(){
    console.log("Una breve Descripcion")!
  }


  constructor(nombre:string, edad:number, sexo:number, estadoCivil:string){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.estadoCivil = estadoCivil;

  }
}

// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
