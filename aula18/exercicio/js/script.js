function meuEscopo(){
    // para selecionar coisas no html 
    const form = document.querySelector('.form');
    const resultado =document.querySelector('.resultado');
    // posso selecionar pelo nome, pela classe usando .nomeClasse ou pelo id usando #nomeID. Assim como fazemos no CSS

    const pessoas = [];


    // form.onsubmit = function (evento){
    //     evento.preventDefault();
    //     // Nesse evento prevent o que era default. Não faça o que seria feito por default. 
    //     // para previnir que atualize a pagina 

    // }; // automaticamente recebe o evento

    // uma outra forma de evitar o envio automativo é: 
    function recebeEventoForm(evento){

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const pessoa = {
            nome: nome.value,
            sobrenome : sobrenome.value,
            altura : altura.value,
            peso: peso.value
        }
        pessoas.push(pessoa);

        console.log(pessoas);

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}. </p>`

        evento.preventDefault();
    }

    form.addEventListener('submit', recebeEventoForm); // criei um rastreador do evento submit. Ao perceber o evento chamo a funcao receberEventoForm e executo o que tem na funcao


}



meuEscopo();