const prompt = require('prompt-sync')()

let macas = parseInt(prompt("Digite o numero de maçãs: "))

if(macas<12){
    console.log("Valor total da compra = R$"+ macas * 0.3)
}else{
    console.log("Valor total da compra = R$"+ macas * 0.25)
}