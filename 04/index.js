const prompt = require('prompt-sync')()

let n1 = parseFloat(prompt("Digite a Primeira Nota: "))
let n2 = parseFloat(prompt("Digite a Segunda Nota: "))

let media = (n1 + n2)/2

if(media>=6){
    console.log("PARABÉNS! Você foi aprovado!")
}