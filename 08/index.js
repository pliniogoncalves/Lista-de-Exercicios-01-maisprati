const prompt = require('prompt-sync')()

let v1 = parseFloat(prompt("Digite o primeiro valor: "))
let v2 = parseFloat(prompt("Digite o segundo valor: "))

if(v1 > v2){
    console.log(v2,v1)
}else{
    console.log(v1,v2)
}