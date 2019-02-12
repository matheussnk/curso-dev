// Segundo exemplo de funções em JS
//Armazenando funções em uma variavél
//função anonima
const imprimirSoma = function(a,b){
    console.log(a+b)
}
imprimirSoma(2,3)
//Armazenamento de uma função arrow em uma variavel
const soma =(a,b) =>{
    return a+b
}
console.log(soma(2,3))

//retorno implicito
const sub = (a,b) => a-b
console.log(sub(2,3))