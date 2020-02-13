// Seleção multipla entre imendas de outras  Switch do Swift(iOS) é mais robusto 
const printResult = function(value) {
    switch (Math.floor(value)) {
        case 10:
        case 9:
            console.log('Quadro de Honras')
            break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }

}
printResult(10)
printResult(8.9)
printResult(6.55)
printResult(2.3)
printResult(-1)
printResult(11)