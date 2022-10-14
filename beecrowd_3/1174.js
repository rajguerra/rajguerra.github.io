var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

for(var i in lines){
    x = parseFloat(lines[i])
    if(x <= 10){
        console.log(`A[${i}] = ${x}`)
    }
}