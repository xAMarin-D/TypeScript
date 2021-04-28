
class Avga{

  private _nombre:string;


  constructor (nombre?:string){

      this._nombre = nombre || "";
  }

  get nombre():string{
      if(this._nombre){
        return this._nombre;
      }else{
        return "No tiene nombre";
      }
  }



  set nombre(nombre:string){
    console.log("Se llamó el set del nombre");
    if(nombre.length <=3){
      console.log("Debe tener mas de 3 caracteres")
      return;
    }
    this._nombre = nombre;
  }


}




let ciclopee:Avga = new Avga("Wolverine");


console.log(ciclopee.nombre)
ciclopee.nombre = "Ciclope"
console.log(ciclopee.nombre)




















/*
class Verduras{

  private _nombre:string;


  constructor(nomb:string){
    this._nombre = nomb || "";

  }

  // Todos los get y los sets deberian ser publicos

  get nombre():string{
    console.log("Aqui pasó por el get")
    return this._nombre
  }



  set nombre(nombr:string){
    console.log("Aqui paso por el set")

    if(nombr.length < 3){
      throw new Error ("Auxilio!");
    }
    this._nombre = nombr
  }

}





let verdes:Verduras = new Verduras("Tomate");



console.log(verdes.nombre);
verdes.nombre = "Lechuga"
console.log(verdes.nombre);
*/
