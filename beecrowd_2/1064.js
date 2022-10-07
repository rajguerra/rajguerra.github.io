var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var i
var valPos = 0
var soma = 0

for(i = 0; i<lines.length; i++){
    if(parseFloat(lines[i]) > 0){
        valPos++
        soma += parseFloat(lines[i])
    }
}

var media = soma / valPos

console.log(`${valPos} valores positivos\n${media}`)