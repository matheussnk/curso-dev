const notas = [6.4,7.0,9.8,8.1,7.7]
for(let i in notas){
    console.log(i,notas[i])
}

console.log(`
Criando caracteristicas da pessoa
`)


const pessoa = {
    nome:"Matheus",
    sobrenome:"Lima",
    idade:23,
    peso:65
}
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
// Para objetos a maneira mais inteligente de se usar o exemplo acima
// uso dos let para limitar o escopo do laço em que está presente