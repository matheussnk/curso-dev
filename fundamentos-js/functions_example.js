/* Imagine a função como uma receita de bolo ele recebe os ingrediente (Variavel)
realizando o passo a passo e no final você retorna o resultado final que seria o
valor
*/

// Sem retorno
function impriumirSoma(a, b){
    console.log( a + b )
}
impriumirSoma(2,3)
impriumirSoma(2)
impriumirSoma(2,3,4,5)// ignora os valores após a soma dos 2 primeiros
impriumirSoma()

// Com retorno

function soma(a,b = 1){
    return a + b
}
console.log(soma(2,3)) // 5
console.log(soma(2)) // 3 
console.log(soma()) // NaN
