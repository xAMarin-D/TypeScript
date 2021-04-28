

class Ven{
  constructor(public name:string, private realName:string){
    console.log("Constructor Avenger Llamado")


  }
  protected getNombre():string{
    console.log("Get nombre protegido");
    return this.name;
  }
}


class Xmen extends Ven {
//Cuando no tenemos un constructor aqui toma el constructor de la clase padre
  constructor(a:string, b:string){
    console.log("Constructor Xmen Llamado");
  super(a, b)
  }

  public getNombre():string{
    console.log("get nombre publico")
    return super.getNombre();
  }
}





let ciclope = new Xmen("ciclope","Scott");

console.log(ciclope.getNombre());
