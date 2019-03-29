const [a] = [10] // array com x posições
console.log(a);//retorno

const [n1, ,n3, ,n5,n6 = 0 ]  = [10 , 7 , 8 ,11]
console.log(n1,n3,n5,n6) //retorno dos valores inseridos em sua respectiva orde de inserção 
const [, [, nota]] = [[, 8, 8], [9,6, 8]]
console.log(nota)