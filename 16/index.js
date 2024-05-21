const prompt = require('prompt-sync')()

let n = 101
let contador = 0

while(contador < 50){
    let divisores = 0
    let i = 1

    while(i <= n){
        if(n % i === 0){
            divisores++;
        }
        i++;
    }

    if(divisores === 2){
        console.log(n)
        contador++
    }

    n++
}