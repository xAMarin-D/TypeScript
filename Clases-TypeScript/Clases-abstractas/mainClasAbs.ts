
// una clase abstracta impide crear instancias, sirve especificamente para crear un molde
// de una clase para heredarle las cosas a otra clase
// en resumen solo sirven para heredar 



abstract class Mutantes{
  constructor(public nombre:string, public nombreReal:string){


  }
}


class Xmennn extends Mutantes {



}


let wolverino = new Xmennn("Wolverine", "Logan");


console.log(wolverino);
