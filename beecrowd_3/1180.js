var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var n = parseInt(lines[0])
var valores = lines[1].split(" ")
var menor = parseInt(valores[0])
var pos = 0
for(var i in valores){
    var valor = parseInt(valores[i])
    if(valor < menor){
        pos = i
    }
}

console.log(`Menor valor: ${parseInt(valores[pos])}`)
console.log(`Posicao: ${pos}`)