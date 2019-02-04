// Operações que retornão TRUE ou FALSE
const tpl =  ``
var r = "Resutado do Ternario "

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // Negado duas vezes eke ira retornar o valor normal

isAtivo = 1
console.log("Negando uma unica vezes ele retornará o valor oposto  "+!isAtivo) // Negando uma unica vezes ele retornará o valor oposto
console.log(tpl)
console.log('Os ternarios com resultados verdadeiros ...')
console.log(r+"!!3 "+!!3)
console.log(r+"!!1"+!!-1)
console.log(r+"vazio "+!!" ")
console.log(r+"!![] "+!![])
console.log(r+"!!{} "+!!{})
console.log(r+"ternario do Infinity "+!!Infinity)
console.log(r+"ternario do isAtivo Verdadeiro "+!!(isAtivo = true))
console.log(tpl)
console.log('Ternarios com resultados falsos ...')
console.log(r+"!3 "+!3)
console.log(r+"!-1 "+!-1)
console.log(r+"do ternario vazio "+!'')
console.log(r+"do ternario array vazio "+![])
console.log(r+"ternario dos objetos vazio "+!{})
console.log(r+"ternario de !0"+!0)
console.log(r+"ternario do null "+!null)
console.log(r+"ternario do NaN "+!NaN)
console.log(r+"ternario do undefined "+!undefined)
console.log(r+"isAtivo negado  "+!(isAtivo = false))
console.log(tpl)
let name =''
console.log(name || 'Desconhecido')
console.log(tpl)
name ='Lucas'
console.log(name || 'Desconhecido')
