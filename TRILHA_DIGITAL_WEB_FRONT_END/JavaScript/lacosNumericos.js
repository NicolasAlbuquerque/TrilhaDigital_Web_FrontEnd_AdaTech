//Laços numericos FOR

const input = require('readline-sync')


// the problem

// const nota= Number(input.question(`informe a nota ${cont}`))


//estrutura for
let soma=0
let nota;
for(let i =1; i <=3; i++){
    nota= Number(input.question(`informe a nota ${i} do aluno:`));
    soma=soma+nota
}

console.log(`A media do aluno é ${soma/3}`);