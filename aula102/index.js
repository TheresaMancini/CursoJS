const _velocidade = Symbol(); // criando a chave velocidade. Assim, só é possível acessá-la dentro da propria classe. 
class Carro{
    // o mesmo que uma função construtora 
   //  
    constructor(nome,velocidade){
        this.nome = nome;
        this[_velocidade] = 0;

    }
    // pode criaar metodos, essas funções ficam no proto. As instancias não criam a funão de novo
    

    get velocidade(){
        return this[_velocidade];
        // quando chamo c1.velocidade eu pego essa velocidade de dentro da classe é um metodo getter. 
    }

    set velocidade(valor){
        if (typeof valor !== 'number') return; 
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
        // se eu precisasse ter um setter poderia fazer assim, tendo todos os cuidados e limitações. 
    }
    
    acelerar(){
        if (this[_velocidade] >=100)  return; 
        this[_velocidade]++;
    }

    freiar(){
        if (this[_velocidade] <=0)  return; 
        this[_velocidade]--;
    }
}

//instanciar uma pessoa, criar uma pessoa
// new cria uma instancia de um objeto. sem o new da errado. Instancias que tenham construtores. 
const c1 = new Carro('Fusca');

for (i = 0; i<=200; i++ ){
    c1.acelerar();

}

console.log(c1);
