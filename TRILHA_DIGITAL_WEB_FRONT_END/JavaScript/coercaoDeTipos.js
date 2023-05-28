// > Coerção (conversão)  de Tipos.

/*
1. Coerção Explicita (Manual)
*/
const numero=10
console.log(numero, typeof numero);

const numeroEmFormaDeString = String(numero) //convertendo para string
console.log(numeroEmFormaDeString, typeof numeroEmFormaDeString);

console.log(Number('123456'))//converte para numero
console.log(parseFloat('123.25'));//converte para float
console.log(parseInt('123.25'));//converte para inteiro, trunca o numero , tira tudo que está após a virgula
console.log(Boolean(0));//falso
console.log(Boolean(1)); //> 0 é true
/*
2. Coerção Implicica (automatica)

*/
console.clear()
console.log(10+1);
console.log(10+'1');// quando é soma ele concatena.
console.log(10-'1');
console.log(10-'cjosjdos')//retorna NaN Not a NUMBER



//Qaul aserá a saida??

let n = 1 + '1'

n= n - 1

console.log(n); //10

//Qual será a Saída desse código

console.log(2+3+4+'5')//95

//qual será a Saída desse código 
console.log('5'+2+3+4);//5234

//Qial a saída desse tb
console.log('10'- '4'-'3'-2+'5');//15