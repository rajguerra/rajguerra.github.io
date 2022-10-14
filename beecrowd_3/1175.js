var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var x = []

for(var i = 20; i > 0; i--){
    x.push(parseInt(lines.pop()))
}

for(i in x){
    console.log(`N[${i}] = ${x[i]}`)
}