// aprendendo sobre o objeto Math

let num1 = 9.4;
// let  num2 = Math.floor(num1); // arredonda para baixo 
// num2.toFixed(2) deixa com 2 casas decimais
// console.log(num2);

// num2 = Math.ceil(num1); // arredonda para cima 

// console.log(num2);

// num2 = Math.round(num1); // arredonda para o mais próximo

// console.log(num2);

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6))
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6))

// gerando numero aleatório 

console.log(Math.random()); //numero aleatório entre 0 e 1, o 1 não está incluido 

const aleatorio = Math.random() * (10-5) + 5;// numero aleatório entre 5 e 10
console.log(aleatorio)



