interface Monstruito{
  nombre:string;
  realNombre?: string;
  regenerarz(realNombre:string):void;
};


//See puede obligar a las clases a tener cierta forma


class Mutantoide implements Monstruito{
  nombre: string;
  poder: string;
  regenerarz(nombre:string){
    console.log("Hola" + nombre )

  }

  constructor(nombre:string, poder:string){
    this.nombre = nombre
    this.poder = poder;
  }

}



let wolverine = new Mutantoide ("Lobito", "Re Poderoso");

wolverine.regenerarz(wolverine.nombre);
