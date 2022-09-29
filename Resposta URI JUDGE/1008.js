var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numero = parseInt(lines[0])
let horas = parseInt(lines[1])
let valorHora = parseFloat(lines[2])

let salario = horas * valorHora

console.log('NUMBER = ' + numero)
console.log('SALARY = U$ ' + salario.toFixed(2))