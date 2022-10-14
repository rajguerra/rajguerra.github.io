var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const { stdout } = require("process");

for (var i in lines){
    var x = parseInt(lines[i])
    if(x != 0){
        for(var j=0; j < x; j++){
            if(j==0){
                stdout.write(`${j+1}`)
            }else{
                stdout.write(` ${j+1}`)
            }
        }
    }else{
        break;
    }
    console.log('')
}