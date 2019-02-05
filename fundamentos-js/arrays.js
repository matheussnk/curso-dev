// heterogêneo agrupamento linear 
const tpl = ` `
const values = [7.7, 8.9 , 6.3 ,9.2]
console.log(values[0],values[3])
console.log(tpl)
console.log(values[4])
console.log(tpl)
values[4] = 10
console.log(values)
console.log(tpl)
console.log(values.length)
console.log(tpl)
values.push({id:3},false,null,'teste')
// Inserindo valores no array não se recomenda utilizar dados de diferentes tipos em um array para que se preze pelo codigo de facil manutenção
console.log(values)
console.log(tpl)
console.log(values.pop())
// remove atributos
delete values[0]
console.log(values)
console.log(typeof values)
// Será reconhecido como OBJETO por não se referenciar aos tipos de dados alocados em si 
console.log(typeof values[1])
// Solicitando o typeof do values trazendo um valor alocado no array no indice 1