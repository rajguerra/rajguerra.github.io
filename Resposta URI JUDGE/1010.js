var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var peca1 = lines[0].split(' ')
var peca2 = lines[1].split(' ')

let valorPeca1 = parseInt(peca1[1]) * parseFloat(peca1[2])
let valorPeca2 = parseInt(peca2[1]) * parseFloat(peca2[2])
let total = valorPeca1 + valorPeca2

console.log('VALOR A PAGAR: R$ ' + total.toFixed(2))