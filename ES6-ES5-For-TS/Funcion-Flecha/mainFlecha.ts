
//Funcion de flecha o lambda function


let sumaz = (b:number,c:number)=> b+c;
console.log(sumaz(2,2))



/*let darOrden_hulk = (orden:any) =>{
  return `Hulk ${orden}`
}
*/
//Esta bien de esa manera pero es mucho mejor de esta otra...

//let darOrden_hulk = (orden:any) =>`Hulk ${orden}`;

//Me ahorro todo el return



//console.log(darOrden_hulk("SMAAAAAAAAASH"))


let capitan_america = {
  nombre:"Hulk",
  darOrden_hulk:function(){
    setTimeout( ()=>
      console.log(this.nombre + " SMAAAASH")
      ,3000)
  }
}

//LAS FUNCIONES DE FLECHAS NO CAMBIAN EL OBJETO THIS...


capitan_america.darOrden_hulk();
