var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var cahorrosQuentes = Number(lines[0])
var participantes = Number(lines[1])

var media = cahorrosQuentes / participantes

console.log(media.toFixed(2))