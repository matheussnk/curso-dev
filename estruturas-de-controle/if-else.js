const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log("Aprovado  com sucesso")
    } else {
        console.log("Você não atingiu a nota para aprovação")
    }
}
imprimirResultado(8.75)
imprimirResultado(6.9)