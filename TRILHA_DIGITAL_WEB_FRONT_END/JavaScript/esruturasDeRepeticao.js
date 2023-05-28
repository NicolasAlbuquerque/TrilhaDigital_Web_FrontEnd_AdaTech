//Laços Condicionais
const input = require('readline-sync')//npm installl readline-sync


let numero = Number(input.question('Qual numero você escolhe?'))
const numeroSorteado = 5

while(numero !== numeroSorteado){

    console.log('voce errou tente novamente')
    const numero = Number(input.question('Qual numero você escolhe?'))
    
}
console.log('voce acertou');