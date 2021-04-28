// Tipos
let batmann:string = "Bruce";
let superman:string = "Clark";
let existee:boolean = false;


// Tuplas
let parejaHeroes:[string,string] = [batmann,superman];
let villanoo:[string,number,boolean] = ["Lex Lutor",5,true];


// Arreglos
let aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];
console.log([1], [2], [3])



//Enumeraciones
enum Fuerza{
  aquaman=0,
  batmann=1,
  flash=5,
  supermann=100

}


let fuerzaFlash = Fuerza.flash;
let fuerzaSuperman = Fuerza.supermann;
let fuerzaBatman = Fuerza.batmann;
let fuerzaAcuaman = Fuerza.aquaman;
;


// Retorno de funciones
function activar_batiseñal():string{
  return "activada";
}


function pedir_ayuda():void{
  console.log("Auxilio!!!");
}


// Aserciones de Tipo
let poder:string = "100";
let largoDelPoder:number = poder.length;
console.log( largoDelPoder );


// Aserciones de Tipo
let poder2:number = 100;
let largoDelPoder2:number = poder2.toString.length;
console.log( largoDelPoder2 );
