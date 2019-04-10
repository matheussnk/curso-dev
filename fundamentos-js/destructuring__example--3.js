function rand({min = 0, max = 1000}) {
    const valor = Math.random() *(max - min) + min
    return Math.floor(valor)
}
const obj = {max:50, min:40}
console.log(rand(obj))// Numeros randomicos de 40 a 50
console.log(rand({max:50, min:40 }))// segunda forma 
console.log(rand(rand({ min:955 }))) // ira variar de 955 a 1000 por padrão definido na função 
console.log(rand(rand({})))//valor vazio ele só operará a função 