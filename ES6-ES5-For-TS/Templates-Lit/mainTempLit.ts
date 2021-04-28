//Los templates literales permiten crear strings de otra forma


let nombre1:string = "Bruce";
let nombre2:string = "Ricardo";


function getNombres():string {
  return `${nombre1} ${nombre2}`
}



let mensajitox:string = `1. Esto es una linea normal
2. Hola ${nombre1}
3. Robin es: ${nombre2}
4. Los nombres guardados son: ${getNombres()}
5. ${(5+7)*8}
`;




console.log(mensajitox)
