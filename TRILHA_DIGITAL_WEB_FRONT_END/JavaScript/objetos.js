// => OBJETOS 

//Como criar um objeto no JavaScript?
let pessoa = {
    nome: 'Nicolas',
    sobrenome:'Albuquerque',
    idade: '28'
}

console.log(pessoa)
console.log(pessoa.nome);
console.log(pessoa['nome']);
console.log(pessoa['idade']);


// Como Adicionar uma par Chave-valor?

pessoa.altura= 1.77

console.log(pessoa);

//Como Deletar um par chave-valor?

delete pessoa.altura

console.log(pessoa);

console.clear()

//como percorrer?

for (let chave in pessoa){
    console.log(pessoa);// exibe atributo e valor 
    console.log(chave);//percorre a chavnome do atributo

}