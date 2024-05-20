const prompt = require('prompt-sync')()

let n1 = parseInt(prompt("Digite o Primeiro Numero: "))
let n2 = parseInt(prompt("Digite o Segundo Numero: "))
let n3 = parseInt(prompt("Digite o Terceiro Numero: "))
let n4 = parseInt(prompt("Digite o Quarto Numero: "))

n4 = n1 + n2 + n3
n1 += 25
n2 *= 3
n3 = (n3*12)/100

console.log(n1)
console.log(n2)
console.log(n3 + "%")
console.log(n4)