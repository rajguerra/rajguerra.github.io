var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var soma = 0;
var numNotas = 0;

for (var i in lines) {
  if (parseFloat(lines[i]) >= 0 && parseFloat(lines[i]) <= 10) {
    soma += parseFloat(lines[i]);
    numNotas++;
  } else {
    console.log("nota invalida");
  }
  if (numNotas == 2){
    break;
  }
}

var media = soma / numNotas;

console.log(`media = ${media}`);
