var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const { EOF } = require('dns');

var i = 0

while(lines[i] != EOF){
    var valores = lines[i].split(" ")
    var v = Number(valores[0])
    var t = Number(valores[1])
    
    var desloc = v * (2 * t)
    console.log(v + " " + t)
    i++
}