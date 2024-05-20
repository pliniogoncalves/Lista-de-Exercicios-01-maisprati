const prompt = require('prompt-sync')();

let eleitores = parseInt(prompt("Digite o Numero de Eleitores: "));
let votos_brancos = parseInt(prompt("Digite o Numero de Votos Brancos: "));
let votos_nulos = parseInt(prompt("Digite o Numero de Votos Nulois: "));
let votos_validos = parseInt(prompt("Digite o Numero de Votos Validos: "));

console.log("Percentual de Votos Brancos: " +((votos_brancos*100)/eleitores)+"%")
console.log("Percentual de Votos Nulos: " +((votos_nulos*100)/eleitores)+"%")
console.log("Percentual de Votos Validos: " +((votos_validos*100)/eleitores)+"%")