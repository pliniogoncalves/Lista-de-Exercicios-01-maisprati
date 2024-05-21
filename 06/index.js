const prompt = require('prompt-sync')()

let a = parseInt(prompt("Digite o Primeiro lado do triangulo: "))
let b = parseInt(prompt("Digite o Segundo lado do triangulo: "))
let c = parseInt(prompt("Digite o Terceiro lado do triangulo: "))

if((a < b+c)&&(b<a+c)&&(c<a+b)){
    if(a === b && b === c){
        console.log("Triângulo Equilátero")
    }else if(a === b || a === c || b === c){
        console.log("Triângulo Isosceles")
    }else{
        console.log("Triângulo Escaleno")
    }
}else{
    console.log("Não é um trinângulo!")
}