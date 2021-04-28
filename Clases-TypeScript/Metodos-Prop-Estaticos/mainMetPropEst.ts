


class Xmenn{
  public nombre:string = "Wolverine";
  constructor(){

  }

  static crearXmenn(){
    console.log("Se creo usando un metodo estatico")
    return new Xmenn();
  }


}



let wolverine2 = Xmenn.crearXmenn();


console.log(wolverine2);
//Los metodos estaticos no son ni publicos ni privados ni protegidos son ESTATICOS!
