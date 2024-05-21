const prompt = require('prompt-sync')()

let n, peso, total=0, contador_peso=0

while (true) {

    n = parseFloat(prompt("Digite o valor do numero: "))
    if(n === 0)break;

    peso = parseFloat(prompt("Digite o valor do peso: "))
    
    total = total + n*peso
    contador_peso += peso
     
}

console.log("A Média é :" + total/contador_peso)