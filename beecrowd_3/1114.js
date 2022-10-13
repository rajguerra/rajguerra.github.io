var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var senhaCorreta = 2002

for (var i in lines){
    if(parseInt(lines[i]) == senhaCorreta){
        console.log('Acesso Permitido')
        break;
    }else{
        console.log('Senha Invalida')
    }
}