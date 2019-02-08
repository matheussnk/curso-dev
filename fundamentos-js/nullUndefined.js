const prod = {} 
prod.nome ="Vade Mecum Saraiva"
const b = prod // Possui apenas o endereço no qual o prod aponta conchecido como armazenamento por referência
console.log(prod)
let c = 3
let d = c 
d++ // Incrementação = 4  porém o valor de c se manterá 3 por se tratar de um valor primitivo
let valor //Não iniciada 
console.log(valor)
// console.log(valor2) Resultará em um valor não declarado em seu programa
valor = null // ausêcia de valor
console.log(valor)
// console.log(valor.toString()) ERRO!!! O preço consta como nulo

const produto = {} 
console.log(produto.preco)// Indefindo
produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined 
console.log(!!produto.preco)
delete produto.preco
console.log(produto)// Objeto vazio 

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)