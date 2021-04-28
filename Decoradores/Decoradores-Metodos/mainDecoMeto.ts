function editable(esEditable:boolean){

  return function( target:any, nombrePropiedad:string, descriptor:PropertyDescriptor ){

    if ( !esEditable ) {
      console.warn("No me haran cambiar de Opinion")
    }

   descriptor.writable = esEditable;
  }

}


class VillanoO {
   public nombre:string
  constructor(nombre:string){
    this.nombre = nombre;
  }

  @editable(false)
  plan(){
    console.log("Es dominar el mundo");
  }


}


let lexO = new VillanoO("Lex Luthor");

lexO.plan = function(){
  console.log("Es cortar Flores")
}
lexO.plan();
