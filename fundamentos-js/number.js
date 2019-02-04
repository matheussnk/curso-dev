const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const av1 = 9.871
const av2 = 6.871

const total = av1 * peso1 + av2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))  // Valor com formatação com 2 casas decimais
console.log(media.toString()) // Valor cheio 
console.log(typeof media) // Tipo de dado 
console.log(typeof Number) // Função  
