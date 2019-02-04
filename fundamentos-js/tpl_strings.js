// Template string aplicado no ECMA 6

const nome = 'Matheus'
const concatenacao = 'Olá ' + nome + ' !'
const template = 
    `
Olá ${nome} !`// O template aceita a formatação através de ENTER e tabulação e era afetar em sua exibição.
 console.log(concatenacao,template)
 // expressões 
 console.log(`1 +1 = ${1 + 1}`)
 const up = texto => texto.toUpperCase() 

 console.log(`Ei... ${up('cuidado')}!`)// Tratamento com uppercase como alerta para usuarios
