// Exercício

const nome = 'Ana Theresa';
const sobrenome = 'Mancini';
const idade = 24;
const peso = 55; 
const alturaEmM = 1.59; 
let imc; 
let anoNascimento; 

anoNascimento = 2021 - idade;


imc = peso/(alturaEmM*alturaEmM)

console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg.")
console.log("tem", alturaEmM, "e seu IMC é de", imc + ".")
console.log(nome, "nasceu em", anoNascimento + ".")

// Template Strings
// coloca a string entre crases e usa ${variavel} Parecido com o que faz no pyhton com o fstring 

console.log(`tem ${alturaEmM} e seu IMC é de ${imc} .`)


// Diferença entre let e Var 
var nome = 'Luiz'
var nome = 'Otavio' // com var isso não gera erro, mesmo eu estando redeclarando uma variavel 
//ECMAScript (ES6) padronização da linguagem JavaScript 

