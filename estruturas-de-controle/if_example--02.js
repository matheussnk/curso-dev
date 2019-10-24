// tbulação correta quando nao se usar chaves '{}"  é recomendado o uso das chaves para ter um cuidado maior com o que será executado
function teste1(num) {
    if (num > 7)
        console.log(num)
    console.log('Final')

}
teste1(8)
teste1(6)


function teste2(num) {
    if (num > 7) {
        console.log(num)
        console.log('Final')
    }
}
teste2(8)
teste2(6)