const prompt = require('prompt-sync')()

let n, contador=5

do{
    n = parseInt(prompt("Digite o valor de N: "))

    for(let i = 1; i <= n; i++){
        console.log(n + "x" + i + " = " + n * i)
    }

    contador--
}while(contador != 0)

