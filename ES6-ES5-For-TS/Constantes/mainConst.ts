
const OPCIONES:string = "Activo";

if (true) {
  const OPCIONES:string = "Activo"
}


for (const i of [1,2,3,4,5,6]){
  console.log(i)
}


//Permite poner una constante y no re declararse, a no ser que se puede definir la misma constante pero dentro de otro Scope.


const OPCIONEES = {
  estado : true,
  audio: 10,
  ultima: "main"
};

OPCIONEES.estado = false;
OPCIONEES.audio = 1;

console.log(OPCIONEES)
