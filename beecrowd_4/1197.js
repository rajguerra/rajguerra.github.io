var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while(lines.length > 0){
    var linha = lines.shift()
    var valores = linha.split(" ")
    var v = Number(valores[0])
    var t = Number(valores[1])
    
    var desloc = v * 2 * t
    console.log(desloc)
}