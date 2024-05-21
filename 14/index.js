const prompt = require('prompt-sync')()

let n, total=0, contador=0

while (true) {

    n = parseFloat(prompt("Digite o valor do numero: "))
    if(n === 0)break;
    
    total = total + n
    contador += 1
     
}

console.log("A Média é :" + total/contador)