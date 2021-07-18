//Aula sobre Objetos

// const nome01 = 'Luiz'; 
// const sobrenome01 = 'Otavio';
// const idade01 = 25; 

// const nome02 = 'Luiza'; 
// const sobrenome02 = 'Martins';
// const idade02 = 29; 

// essa forma de criar varias pessoas é ruim. Melhor criar um objeto no qual as variáveis estarão relacionadas. 

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 25
};

const pessoa2 = {
    nome: 'Luiza',
    sobrenome: 'Martinz',
    idade: 29 
};

console.log(pessoa1.nome)

// ainda não ta muito bom. Melhor ainda criar uma funcao que cria pessoas. 

// function criaPessoa (nome, sobrenome, idade){
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// const pessoaFuncao1 = criaPessoa('Luiz', 'Otavio', 25)
// const pessoaFuncao2 = criaPessoa('Luiza', 'Martinz', 29)

// console.log(pessoaFuncao1.sobrenome)


const pessoa3 = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 25,

    fala(){
        console.log(`A minha idade atual é ${this.idade}`)
    },
    // adicionando metodos ao objeto

    incrementaIdade(){
        this.idade++;
    }
};

pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();