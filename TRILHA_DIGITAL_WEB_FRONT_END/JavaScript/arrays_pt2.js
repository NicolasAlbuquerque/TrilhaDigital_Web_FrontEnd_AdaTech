//ARRAYS - PARTE 2- METODOS DE ARRAYS
const arr1 = [30,12,45,34,29]
const arr2= []
//Fatiamento - slice

console.log(arr1.slice(0,2));//INDICAMOS DO INDICE ZERO ATÉ O INDICE 2, SENDO O INDICE 2 NÃO EXIBIDO E SIM O ZERO E UM
console.log(arr1.slice(0));//aqui quando não indicamos o final ele exibe todo o array


//adicionando elementos: push | unshift
    arr2.push(2)
    console.log('Antes de Adicionar o Elemento',arr2)
    arr2.push(4,5,6)   
    console.log('Depois de Adicionar o Elemento',arr2)

    console.log('Antes de Adicionar o Elemento com unshift',arr2)
    arr2.unshift(0)
    console.log('Depois de Adicionar o Elemento com unshift',arr2)


//removendo elementos: pop | shif

console.log('Antes de remover como  pop: ', arr2);
const elementoRemovidoComPop = arr2.pop()
console.log('Depois de remover com pop:  ', arr2);
console.log('O elemento Removido foi o:  ',elementoRemovidoComPop );

console.log('Antes de remover como  shift: ', arr2);

const removido=arr2.shift()
console.log('Depois de remover com shift:  ', arr2);
console.log('o elemento removido foi o ', removido);

//Concatenando arrays: concat
console.clear()

console.log('arr1', arr1);
console.log('arr2', arr2); 
console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1));

//Buscando elementos: indexOf | lasIndexOf

let indiceDoElemento34 = arr1.indexOf(34)
console.log(indiceDoElemento34);
let indiceDoElemento35 = arr1.indexOf(35)// não tem e retorna -1
console.log(indiceDoElemento35);

let arr3= [1,2,3,3,3,5,3]
console.log(arr3.indexOf(3));
console.log(arr3.lastIndexOf(3))

console.clear()

//Descobrindo se a existencia de um elemento: includes
console.log(arr1)
console.log(arr1.includes(12));
console.log(arr1.includes(10));

//invertendo Arrays

console.log('Array normal', arr1);

const arr1Invertido = arr1.reverse()
console.log('array invertido',arr1Invertido);