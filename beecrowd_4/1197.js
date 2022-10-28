var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

lines.forEach((linha) =>{
    var valores = linha.split(" ")
    var v = Number(valores[0])
    var t = Number(valores[1])
    
    if ((v >= -100 && v <= 100) && (t >= 0 && t <= 200)){
        var desloc = parseInt((v * 2 * t));
        console.log(desloc);
    }
})