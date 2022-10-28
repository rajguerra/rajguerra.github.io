var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

lines.forEach((linha) =>{
    var valores = linha.split(" ")
    var h = parseInt(valores[0])
    var o = parseInt(valores[1])
    
    var dif = Math.abs(h-o)
    if(!isNaN(dif)){
        console.log(dif)
    }
})