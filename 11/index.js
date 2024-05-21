const prompt = require('prompt-sync')()

let valor

do{
    valor = (parseInt(prompt("Digite um valor: ")))

    if(valor === null || valor <= 0)break;
    
    if(valor%2 === 0){
        console.log("PAR")
    }else{
        console.log("IMPAR")
    }

}while(valor > 0);