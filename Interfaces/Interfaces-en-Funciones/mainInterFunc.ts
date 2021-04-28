interface DosNumerosFunc{
  (num1:number, num2:number) : number
}


let suma:DosNumerosFunc;

suma= function (a:number, b:number){
  return a+b;
}

let restar:DosNumerosFunc;

restar = function(numero1:number, numero2:number){
  return numero1 - numero2;
}


console.assert();
