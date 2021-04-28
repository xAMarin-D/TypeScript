function nombresCompletos( nombre:string, ...losDemasParametros:string[] ):string{

return nombre + " " + losDemasParametros.join(" ");

}

let supermann = nombresCompletos("Clark", "Joseph", "Kent");
let ironmann = nombresCompletos("Anthony", "Edward", "Tony", "Stark");

console.log(supermann);
console.log(ironmann);
