// JSON é um formato textual os objetos são formatações literais
const prod = {}
    prod.nome ='Vade Mecum Saraiva'
    prod.preco = 369.90
    prod ['Desconto'] = 0.40 
console.log(prod)

const prod2 = {
    nome : 'HQ Homem Aranha',
    preco: 69.00 // evitar atributos com espaços
    sku:'15028'
}
console.log(prod2)