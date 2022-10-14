var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var alcool = 0
var gasolina = 0
var diesel = 0
var tipo = 0

for(i in lines){
    tipo = parseInt(lines[i])
    if(tipo == 1){
        alcool++
    }else if(tipo == 2){
        gasolina++
    }else if(tipo == 3){
        diesel++
    }else if(tipo == 4){
        break;
    }
}

console.log(`MUITO OBRIGADO\nAlcool: ${alcool}\nGasolina: ${gasolina}\nDiesel: ${diesel}`)
    
