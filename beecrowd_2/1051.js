var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var salario = parseFloat(lines[0])
var imposto = 0

if(salario >= 0 && salario <= 2000){
    console.log('isento')
}else if(salario > 2000 && salario <= 3000){
    imposto = (salario - 2000) * 0.08
    console.log(`R$ ${imposto.toFixed(2)}`)
}else if(salario > 3000 && salario <= 4500){
    imposto = (salario - 3000) * 0.18 + (1000 * 0.08)
    console.log(`R$ ${imposto.toFixed(2)}`)
}else if(salario > 4500){
    imposto = (salario - 4500) * 0.28 + (1500 * 0.18) + (1000 * 0.08)
    console.log(`R$ ${imposto.toFixed(2)}`)
}