class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false; 
    }
    
        ligar() {
            if (this.ligado){
                console.log(this.nome+ 'já está ligado.')
                return;
            }
            this.ligado = true; 
        }
        desligar() {
            if (!this.ligado){
                console.log(this.nome+ 'já está desligado.')
                return;
            }
            this.ligado = false; 

        }
}

const d1 = new DispositivoEletronico('Celular');
console.log(d1);


class Smartphone extends DispositivoEletronico {
    constructor(nome,cor, modelo){
        super(nome); // uso o super para chamar o construtor da classe pai e passa os parametros necessários
        this.cor = cor;
        this.modelo = modelo;
    }

    static resetar(){
        console.log("Estou Resetando");
        // uma função static só pode ser acessada de dentro da função
        //sem o nome static é uma função de instancias.  
    }
}
// se eu quiser adicionar coisas a essa classse alem das herdade preciso abrir e criar um construtor

const s1 = new Smartphone('Iphone','Preto','XR');

console.log(s1);

//posso fazer ainda mais especifico, posso fazer outro herdar. Não fazer mais do que 2 classes herdarem em cadeia ou seja. C3 herda C2 que herda C1 no máximo. 

Smartphone.resetar();
