var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const { EOF } = require('dns');

var i = 0

while(lines[i] != EOF){
    var valores = lines[i].split(" ")
    var h = Number(valores[0])
    var o = Number(valores[1])
    
    var dif = Math.abs(h-o)
    console.log(dif)
    i++
}