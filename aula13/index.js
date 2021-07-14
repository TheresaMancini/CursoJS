// se precisar usar "" dentro das strings usamos \ como caractere de escape 
// se eu quiser uma \ preciso usar \\ uma será o caractere de escape e a outra será exibida

// string pode ser tratado como um "vetor" exemplo nome = "maria" nome[2]='r'

// charAt pega o caractere na posição específica, se passar do tamanho retorna vazio. 

// concat concatema strings

let nome = "Ana Theresa Mancini" //       012
console.log(nome.charAt(2)) // retorna a (Ana)
console.log(nome.concat(" tem 24 anos")) // retorna Ana Theresa Mancini tem 24 anos

console.log(nome.indexOf("Theresa")) // em qual posição começa essa palavra, se não encontrar retorna -1. também pode indicar onde ele começa a procurar 
console.log(nome.indexOf("Theresa",2))//

console.log(nome.lastIndexOf("Theresa")) // mesma coisa mas procura de trás pra frente continua contando 0123 mas se eu começar do 3 e o valor que procuro estiver no 7 não vou encontrar

//search,replace e match aceitam expressões regulares

//slice pega o pedaço da string (2,4) assim começaria do 2 e iria até o 3 se eu quiser o indice 4 preciso colocar até o 5
// slice(3) começa do 3
// slice(-3) contando de trás pra frente. Vou começar do -3
// Se o nome fosse "Theresa" começaria com -3 em 'e' e retornaria esa

console.log('Theresa'.slice(3)) // resa
console.log('Theresa'.slice(-3)) // esa


// .toUpperCase() tudo maiusculo
// .toLowerCase() tudo minusculo


// .toString() converte para uma strings

// manipulando numero

// toFixed(2) -> muda o numero de casas decimais de um flot. Mostra até a segunda casa decimal
// numb.isInteger() -> testa se é um inteiro
// numb.isFloat() -> testa se é um numero 
// numb.isNumber() -> retorna se é um numero ou não  
// Number.isNaN(variavel) -> testa se a variável é um NaN

// imprecisão de numero IEEE 754-2008 precisao dos numero 

num1 = 0.1;
num2 = 0.7;

console.log(num1+num2) // não da 0.8 da 0.799999999

console.log((num1+num2).toFixed(2)) // mostra 0.8 mas continua sendo 0.79999999


parseFloat(num1.toFixed(2)); 

// para resolver esse problema de precisao usar parseFloat  ou Number



