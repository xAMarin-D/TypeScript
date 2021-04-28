class Avge{
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

let antmann:Avg = new Avge ("Antman", "Cap", "Scott", true, 43);


console.log(antmann);
