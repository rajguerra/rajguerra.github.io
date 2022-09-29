var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let nome = lines[0]
let salario= parseFloat(lines[1])
let vendas = parseFloat(lines[2])

let comissao = vendas * 0.15
let total = salario + comissao

console.log('TOTAL = R$ ' + total.toFixed(2))