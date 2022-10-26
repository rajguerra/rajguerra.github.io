var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var trigo = Number(lines[0])
var ovos = Number(lines[1])
var leite = Number(lines[2])

qntTrigo = Math.floor(trigo/2)
qntOvos = Math.floor(ovos/3)
qntLeite = Math.floor(leite/5)

console.log(Math.min(qntTrigo,Math.min(qntLeite,qntOvos)))