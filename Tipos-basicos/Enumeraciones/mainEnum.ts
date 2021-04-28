enum Volumen{
  min=10,
  medio=50,
  max=100
}

let audio:number = Volumen.min;

console.log( audio );


console.log(Volumen[100]);

//Si no le defino igualdad al enum me va sumando de a 1 en orden
