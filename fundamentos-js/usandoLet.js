// Escopo visivel apenas no bloco
let num = 1
{
    let num = 2
    console.log('dentro =', num)
} 
console.log('fora =', num)
