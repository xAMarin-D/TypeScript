"use strict";
//Funcion de flecha o lambda function
var sumaz = function (b, c) { return b + c; };
console.log(sumaz(2, 2));
/*let darOrden_hulk = (orden:any) =>{
  return `Hulk ${orden}`
}
*/
//Esta bien de esa manera pero es mucho mejor de esta otra...
//let darOrden_hulk = (orden:any) =>`Hulk ${orden}`;
//Me ahorro todo el return
//console.log(darOrden_hulk("SMAAAAAAAAASH"))
var capitan_america = {
    nombre: "Hulk",
    darOrden_hulk: function () {
        var _this = this;
        setTimeout(function () {
            return console.log(_this.nombre + " SMAAAASH");
        }, 3000);
    }
};
//LAS FUNCIONES DE FLECHAS NO CAMBIAN EL OBJETO THIS...
capitan_america.darOrden_hulk();
