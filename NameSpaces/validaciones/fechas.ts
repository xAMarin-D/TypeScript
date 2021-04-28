

namespace Validaciones {
  export function validarFechas(fecha:Date):boolean{
    if (isNaN( fecha.valueOf())) {
      return false;
    }else{
    return true;
    }
   }
}
