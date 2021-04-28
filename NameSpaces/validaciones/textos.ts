


namespace Validaciones {
  export function  validarTextos(texto:string):boolean{
    if (texto.length >= 3) {
      return true;
    }
    return false;
  }
}
