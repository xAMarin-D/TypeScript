


//Un decorador es una funcion Cualquiera


function consola ( constructor:Function){
  console.log(constructor);
}






@consola
class VillanoB{
  nombre:string;
  constructor(nom:string){
    this.nombre = nom;
  }
}
