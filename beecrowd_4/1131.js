var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var grenais = 0
var inter = 0
var gremio = 0
var empates = 0

for(i in lines){
    if(i%2===0){
        var gols = lines[i].split(" ")
        grenais++
        if(Number(gols[0]) > Number(gols[1])){
            inter++
        }else if(Number(gols[0]) < Number(gols[1])){
            gremio++
        }else if(Number(gols[0]) === Number(gols[1])){
            empates++
        }
        console.log("Novo grenal (1-sim 2-nao)")
    }else{
        if(Number(lines[i]) === 2){
            break
        }
    }
}

console.log(`${grenais} grenais`)
console.log(`Inter:${inter}`)
console.log(`Gremio:${gremio}`)
console.log(`Empates:${empates}`)

if(gremio > inter){
    console.log("Gremio venceu mais")
}else if(gremio < inter){
    console.log("Inter venceu mais")
}else{
    console.log("Nao houve vencedor")
}