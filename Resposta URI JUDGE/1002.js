var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let raio = parseFloat(lines[0])

const pi = 3.14159
let area = pi * Math.pow(raio, 2)

console.log('A=' + area.toFixed(4))