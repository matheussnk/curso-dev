// Função em JS  é First-Class Object (Citizens)
// High-order Function  - Pilar que habilita a programação funcional

// criar de forma literal 

function fnc1() {
  
}

// armazenar a variavel sendo const var ou let 
const fnc2 = function () { }

// armazenar em um array 
const array = [function (a,b) {return a + b}, fnc1,fnc2 ]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto 
const obj = {}
obj.speak = function () { return "Hi"}
console.log(obj.speak());


// Passar funçao por parametro 

function run(fun) {
    fun()
}

run(function () { console.log('Executando....')})

//função para retornar 
function soma(a,b) {
    return function (c) {
        console.log(a + b + c)
    }
}
console.log( "Calculando 2 + 3 + 4")
soma(2,3)(4) 
console.log( `
Calculando 2 + 3  passando o valor dentro da constante cincoMais  + 4 totalizando 9
 `)
const cincoMais = soma (2 , 3 )
cincoMais (4)