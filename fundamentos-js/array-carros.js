var carros =[]
console.log(carros)
var  carros1 = {
    'marca':'ford',
    'cor':'preto',
    'ano': 2019
}
var  carros2 = {
    'marca':'bmw',
    'cor':'preto',
    'ano': 2019
}

carros.push(carros1,carros2)
// console.log(carros)
carros.forEach((carro , chave , array) => {
    console.log(chave,carro.marca,array)
});
