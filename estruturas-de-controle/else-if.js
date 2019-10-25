Number.prototype.entre = function(start, end) {
    return this >= start && this <= end
}

const printResult = function(nota) {
    if (nota.entre(9, 10)) {
        console.log("Quadro de Honras");
    } else if (nota.entre(7, 8.99)) {
        console.log("Aprovado");
    } else if (nota.entre(4, 6.99)) {
        console.log("Recuperação");
    } else if (nota.entre(0, 3.99)) {
        console.log("Reprovado");
    } else {
        console.log("Nota invalida");
    }
}
printResult(9);
printResult(7);
printResult(6);
printResult(3);
printResult(-1);

// IF tratativa para a validação se verdadeiro e ELSE se aquele item validado for falso  ELSE IF para multiplas validações