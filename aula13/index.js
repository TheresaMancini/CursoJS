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