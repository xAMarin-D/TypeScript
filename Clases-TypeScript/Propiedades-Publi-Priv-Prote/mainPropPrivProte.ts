class  Avgen{
  public nombre: string;
  protected equipo: string;
  //private nombreReal: string;


  //private puedePelear: boolean;
  //private peleasGanadas:number;

  constructor(nom: string, equip:string/*, nomR:string, pPelear: boolean, pGanadas:number*/){
    this.nombre= nom;
    this.equipo= equip;
    //this.nombreReal = nomR;

    //this.puedePelear = pPelear;
    //this.peleasGanadas = pGanadas;

  }


}


let antmannn:Avgen = new Avgen ("Antman", "Cap", /*"Scott", true, 43*/);

// Public: puede ser accesado a través de cualquier parte del programa mientars tenga la clase definida.
// Protected: Solo se pueden cambiar los nombres dentro de la clase original o dentro de las clases hijas o herencias.
// Private: Solo pueden ser modificados los valores o las propiedades dentro de la misma clase o constructor.

antmannn.nombre = "Nick Fury";


console.log(antmannn);
