var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

for(i in lines){
    var x = parseInt(lines[i])
    if(x <= 0){
        x = 1 
    }
    console.log(`X[${i}] = ${x}`)
}