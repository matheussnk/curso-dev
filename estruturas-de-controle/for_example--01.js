console.log(`
Repetindo através do while 
`)
let contador = 1
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador ++
}
console.log(`
Contando até 10 através de for 
`)
for (let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}
console.log(`
Notas dentro de array 
`)
const notas = [6.4,7.0,9.8,8.1,7.7]
for(i=0;i< notas.length;i++){
    console.log(`notas = ${notas[i]}`)
}