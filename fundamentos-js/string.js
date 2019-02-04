console.log("Matheus Mendonça Lima")

const escola = "Cod3r"
console.log(escola.charAt(4)) // retorna R
console.log(escola.charAt(5)) // ERRO retornando vazio  
console.log(escola.charCodeAt(3)) // Retorna o valor 51 corespondente relacionado ao indice 3 na tabela asc
console.log(escola.substring(0,3)) // Retorna do indice 0 ao indice 3 que equivale a C O D ele percorrerá e exibirá em seu console os valores 
// Concatenação 
console.log("Escola" + " " + escola)
console.log("Escola ".concat(escola).concat("!"))// concatenação com o espaço setado na literal
console.log(escola.replace(3 ,'e'))
console.log('Matheus,Gian,Michelle,Dani'.split(','))// Convertendo uma string para vetor usando o metodo .split
console.log('Matheus,Gian,Michelle,Dani'.split(',')[0])// Puxando resultados dentro do metodo .split 