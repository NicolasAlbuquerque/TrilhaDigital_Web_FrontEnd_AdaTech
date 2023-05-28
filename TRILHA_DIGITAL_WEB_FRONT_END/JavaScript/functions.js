//Funções


//definição
function saudacao(){
    console.log('Hello World');
}
saudacao()

//como passar parametros 

function saudacao2(nome, curso="html-Css"){
    console.log(`inhai ${nome}, dedique-se no curso de ${curso}`);

}
saudacao2('Nicolas')
saudacao2('Nicolas', "JavaScript")

console.clear()

//returo da Função;


function soma(n1,n2){
    return('soma= ', n1+n2);

}

soma(10,2)

const resultado = soma(10,20)//salvando em uma variavel
console.log(resultado)

console.log(soma(20,30));

function maiorque50(num){
    if(num >  50){
        return true
    }
    return false
}
