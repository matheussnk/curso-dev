function rand([min = 0, max = 1000]) {
    if (min > max) [min,max] = [max,min]
    const valor =Math.random() * (max - min ) + min 
    return Math.floor(valor)
}
console.log(rand([50,40]))//Puxará valores onde o maior numero será 50 e o min será 40
console.log(rand([992]))//Percorerá os valores de 992 a 999 devido a 1000 ser o fim dos valores
console.log(rand([,10]))// de 0 a 10 
console.log(rand([]))//atuará sem restrição puxando de 0 a 1000 um valor aleatório
// console.log(rand()) - Causará erro por tentar desestruturar algo indefinido ou nulo 