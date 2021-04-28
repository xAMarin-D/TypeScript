
class Avgeng{
  nombre: string;
  equipo: string;
  nombreReal: string;
  puedePelear: boolean;
  peleasGanadas:number;

  constructor(nom: string, equip:string, nomR:string, pPelear: boolean, pGanadas:number){
    this.nombre= nom;
    this.equipo= equip;
    this.nombreReal = nomR;
    this.puedePelear = pPelear;
    this.peleasGanadas = pGanadas;

  }



  //METODOS

  public bio():void{
    let mensaje:string = `${this.nombre} ${this.nombreReal} ${this.equipo}`;
    console.log(mensaje);
  }


  public cambiaEquipoPublico(nuevoEquipo:string):boolean{
    return this.cambiarEquipo(nuevoEquipo);
  }



  private cambiarEquipo(nuevoEquipo:string):boolean{
    if( nuevoEquipo === this.equipo){
      return false;
    }else{
      return true;
    }
  }
}



let robinuel:Avgeng = new Avgeng ("Antman", "Cap", "Scott", true, 43);

robinuel.bio();
let d = robinuel.cambiaEquipoPublico("IronMan");

console.log(d);
