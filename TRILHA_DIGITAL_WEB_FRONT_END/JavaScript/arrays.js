//=> ARRAYS

//-COMO CRIAR UM ARRAY
let array1= []
let arrays= [1,2,3,4,5]
//Como Acessar os elementos do Array
console.log('arrey todo',arrays);
console.log('primeiro indice', arrays[0]);
console.log('segundo indice', arrays[2]);
console.log('terceiro indice', arrays[3]);

//como obter o tamanho do array

console.log('Quantidade de elementos', arrays.length);

//percorrenco arrays
for(let i =0; i < arrays.length; i++){
    console.log(arrays[i]);
}


for(let elementoDoArray of arrays){
    console.log(elementoDoArray)
}

console.clear()

for(let indicesDoArray in arrays){
    console.log(indicesDoArray, arrays[indicesDoArray]);
}


