
class Avg{
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


}

let antman:Avg = new Avg ("Antman", "Cap", "Scott", true, 43);
