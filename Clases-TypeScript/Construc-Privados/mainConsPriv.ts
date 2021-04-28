
//Solo se puede instanciar una sola vez


class Apocalypsis{

  static instancia: Apocalypsis;


  private constructor(public nombre:string){

  }

  static obtenerInstancia(){
    if(!Apocalypsis.instancia){
      Apocalypsis.instancia = new Apocalypsis("Im the true apocalypsis")
    }
    return Apocalypsis.instancia;
  }


}

//No se puede llamar asi
//let apocalypsisFalso = new Apocalypsis("Soy Apocalypsis Falso");

let real = Apocalypsis.obtenerInstancia();

console.log(real);
