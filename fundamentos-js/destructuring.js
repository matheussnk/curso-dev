//Desestruturação em JS recurso ECMA2015
const people = {
    name:"Matt",
    age:22,
    adress:{
        zipcode:"08340-200",
        street:"xs"
    }
}
const { name , age } = people
console.log(name,age);
//Extração atribuida a outra variavel 
const {adress:{zipcode:z,street:s}} = people // atribuição de alias para as vars
console.log('Adress: '+s,z)
