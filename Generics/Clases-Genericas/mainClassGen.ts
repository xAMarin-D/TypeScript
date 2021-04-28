


class Cuadrado<T extends number|string> {
  base:T;
  altura:T;
  area(): number {
    return +this.base * +this.altura;
}

constructor(base:T, altura:T){
  this.base = base;
  this.altura = altura;
}
}

let cuadrado = new Cuadrado<number|string>(20,"10");
console.log(cuadrado.area());
