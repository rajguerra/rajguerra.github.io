var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while(lines.length > 0){
    var linha = lines.shift()
    var valores = linha.split(" ")
    var h = Number(valores[0])
    var o = Number(valores[1])
    
    if(h>o){
        console.log(h-o)
    }else{
        console.log(o-h)
    }
}