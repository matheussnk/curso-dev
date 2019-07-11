function soBoaNoticia(nota) {
    if (nota >= 7) { // se a nota nota for maior ou igual a 7 o bloco será executado
        console.log("Aprovado sua média foi de "+nota);
    }
}
soBoaNoticia(8.1)
soBoaNoticia(6)// Não irá retornar nada devido não atender os requisitos da função 

function valorVerdadeiro(valor){
    if (valor){
        console.log("É verdade ... "+valor)
    }
}
//Valores que resultaram em FALSE

valorVerdadeiro()//Valor UNDEFINED retornará FALSE como o sitado na aula de BOLEAN 
valorVerdadeiro(null)//Retornará tambem false devido não possuir valor 
valorVerdadeiro(undefined)//Aqui foi atribuido o valor de undefined explicitamente 
valorVerdadeiro(NaN)// Not a Number tambem retornará falso 
valorVerdadeiro("")// string vazia 
valorVerdadeiro(0) // O valor 0 retornará False também

//Valores que seram TRUE
valorVerdadeiro(-1)
valorVerdadeiro(" ")// Por mais que aparente estar vazia ela foi preenchida com um espaço em branco o que a torna TRUE
valorVerdadeiro("?")// Possui preenchimento então é verdadeiro 
valorVerdadeiro([])// Array vazio tambem retorna True 
valorVerdadeiro([1,2])// Array populado também retornará true 
valorVerdadeiro({})//O object é tratado como um valor verdadeiro 
