//içamento = hoisting  com var
console.log('a =', a)
var a = 2
console.log('a =', a)
//hoisting em function
console.log('hoisting em function') 
function hoisting() {
    console.log('a =', a)
    var a = 2
    console.log('a =', a)

}
hoisting()// Terá o mesmo resultado independente de ser função 

//let com hoisting,por padrão ele tratará como erro 
console.log('b =', b)
let  b = 2
console.log('b =', b)