var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

let cod = parseInt(lines[0]);
let quant = parseInt(lines[1]);
let total = 0;
switch (cod) {
  case 1:
    total = quant * 4;
    break;

  case 2:
    total = quant * 4.5;
    break;

  case 3:
    total = quant * 5;
    break;

  case 4:
    total = quant * 2;
    break;

  case 5:
    total = quant * 1.5;
    break;
}

console.log(`Total: R$ ${total.toFixed(2)}`);