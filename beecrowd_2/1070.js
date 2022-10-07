var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var num = parseFloat(lines[0])
var i
var impar = 0

while (impar < 6) {
    if(num%2 !== 0){
        impar++
        console.log(`${num}`)
    }
    num++
}