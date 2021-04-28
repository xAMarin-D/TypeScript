
// Convierta este archivo de ES5 a ES6 - JavaScript 2015
// OJO: No es a TypeScript, solo JAVASCRIPT


// ==============================
//  Spiderman info
// ==============================
// Constantes?
const HEROE = "Spiderman";

// Declaracion de variables?
const spiderman = "Peter Parker",
      venom = "Eddie Brock";

// Destructuracion de arreglos?
let versiones = ["Spider-Man 2099","Spider-Girl","Ultimate Spider-Man"];

/* Asi esta bien*/
let [spiderman2099, spidergirl, ultimate] = versiones;
/*Asi igual */
let spiderman2099 = versiones[0,,];
let spidergirl = versiones[,1,];
let ultimate = versiones[,,2];


// Destructuracion de objetos?
let villanos = {
  venom: "Eddie Brock",
  carnage: "Cletus Kasady",
  sandman: "William Baker"
};

let {venom, carnage, sandman} = villanos;


// Ciclo for Of?
for(let spider of versiones){
  console.log(spider);
}
