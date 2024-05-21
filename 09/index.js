const prompt = require('prompt-sync')()

let codigo = parseInt(prompt("Digite o código do produto: "));

if(codigo === 1)console.log("SUl");
if(codigo === 2)console.log("NORTE");
if(codigo === 3)console.log("LESTE");
if(codigo === 4)console.log("OESTE");
if(codigo === 5 || codigo === 6)console.log("NORDESTE");
if(codigo > 6 && codigo < 10 )console.log("SUDESTE");
if(codigo > 9 && codigo < 21)console.log("CENTRO-OESTE");
if(codigo > 24 && codigo < 51)console.log("NORDESTE");
if(codigo <= 0 || codigo > 20 && codigo < 25 || codigo > 50)console.log("PRODUTO IMPORTADO");