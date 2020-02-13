// Estrutura while aproporiada para uma quantidade não definida
function getIntRandom(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = 0

while (option != -1) {
    option = getIntRandom(-1, 10)
    console.log(`Opção escolhida foi ${option}.`) // uso da ` é para fazer o acesso a variavel alocada no codigo juntamente com o texto.
}

console.log('Até a próxima!')